import constant from "../constant/constant";

export const toggleSideBar = () => dispatch => {
  dispatch({
    type: constant.OPEN_SIDEBAR
  });
};
