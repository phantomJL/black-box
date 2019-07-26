import moment from "moment";
import { API_BASE_URL } from "../../config";
import { loadUserInfo } from "./localStorage.action";
import constant from "../constant/constant";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export function formatDate(date, format) {
  return moment(date).format(format || "YYYY-MM-DD HH:mm");
}

export function convertUTCtoLocal(db_utc_time, format = "YYYY/MM/DD HH:mm") {
  return moment(db_utc_time)
    .local()
    .format(format);
}
export function convertLocalToUTC(local_time, format = "YYYY/MM/DD HH:mm") {
  return moment(local_time)
    .utc()
    .format(format);
}

export function timeDuration(start_time, end_time) {
  const date1 = moment(start_time)
    .local()
    .format("HH:mm");
  const date2 = moment(end_time)
    .local()
    .format("HH:mm");
  return `${date1} ~ ${date2}`;
}

export const parseAmount = (amount, decimal = 0) => {
  return `${parseFloat(amount / 100).toFixed(decimal)} 元`;
};

export const parseAmountNoSign = (amount, decimal = 0) => {
  return parseFloat(amount / 100).toFixed(decimal);
};

export const parsePrice = (amount, decimal = 0) => {
  return `${parseFloat(amount / 100).toFixed(decimal)}`;
};

export const parseDecimal = inputValue => {
  return inputValue.toString().replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
};

export const parseRate = rate => {
  return `${(rate / 10).toFixed(2)}%`;
};

export const parseBloodRate = (rate, decimal = 0) => {
  return `${parseFloat(rate / 10).toFixed(decimal)} %`;
};

export function getPageCount(total_count, perPage = 30) {
  return Math.ceil(total_count / perPage);
}

export function getPageIndex(page) {
  return 30 * ((page || 1) - 1);
}

export function getShortPageCount(total_count, perPage = 30) {
  return Math.ceil(total_count / perPage);
}

export function callApi(endpoint, method, data, query) {
  //check body
  let body = undefined;
  const requireBody = method => {
    const validMethod = ["PATCH", "PUT", "POST"];
    return validMethod.includes(method);
  };
  if (data && requireBody(method)) {
    body = JSON.stringify(data);
  }

  let url = `${API_BASE_URL}/api/v0/${endpoint}?`;
  if (query) {
    Object.keys(query).forEach(key => {
      url += `${key}=${query[key]}&`;
    });
    url = url.slice(0, -1);
  }

  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      user_token: loadUserInfo("user_token"),
      instance_token: loadUserInfo("instance_token")
    },
    body: body
  })
    .then(_normalizeResponseErrors)
    .catch(err => {
      console.log(err);
      throw err;
    });
}

// function normalizeResponseErrors(res) {
//   if (!res.ok) {
//     if (res.headers.has("content-type") && res.headers.get("content-type").startsWith("application/json")) {
//       return res.json().then(err => Promise.reject(err));
//     }
//     return Promise.reject({
//       code: res.status,
//       message: res.statusText
//     });
//   }
//   return res;
// }

async function _normalizeResponseErrors(res) {
  //handle error with returning error code
  if (!res.ok) {
    //handle error message come back as json
    if (res.headers.has("content-type") && res.headers.get("content-type").startsWith("application/json")) {
      return res.json().then(err => Promise.reject(err));
    }
    return Promise.reject({
      code: res.status,
      message: res.statusText
    });
  }

  const json = await res.json();

  // handle error without error code
  if (!json.status) {
    return Promise.reject({
      message: json.message
    });
  }

  return json;
}
export const startLoader = dispatch => {
  dispatch({
    type: constant.START_LOADING
  });
};

export const stopLoader = dispatch => {
  dispatch({
    type: constant.STOP_LOADING
  });
};

export const launchSuccess = async dispatch => {
  await dispatch({
    type: constant.START_SUCCESS
  });
  setTimeout(() => {
    dispatch({
      type: constant.STOP_SUCCESS
    });
  }, 1000);
};
