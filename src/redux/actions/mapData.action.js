import constant from "../constant/constant";
import { processLogout } from "./auth.action";
import { callApi, startLoader, stopLoader, launchSuccess } from "./utilities.action";

export const findZipCodesByCenter = query => async dispatch => {
  try {
    await startLoader(dispatch);
    let zipcodes;
    zipcodes = await findZipcodesAllDetail(query, 0, { type: "FeatureCollection", features: [] });
    await dispatch({
      type: constant.FIND_ZIPCODES_BY_CENTER,
      zipcodes
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

const findZipcodesAllDetail = async (query, cur_start, final_info) => {
  const { payload } = await callApi(`zipcode/all/detail`, "GET", null, {
    start: cur_start,
    ...query
  });
  const { count, end, ...rest } = payload;
  let info = final_info;
  info.features = info.features.concat(rest.features);
  if (payload.end === payload.count) {
    return info;
  } else {
    return await findZipcodesAllDetail(query, end, info);
  }
};
