import constant from "../constant/constant";
const initialState = {
  zipcodes: { type: "FeatureCollection", features: [] }
};

export default (state = initialState, { type, zipcodes }) => {
  switch (type) {
    case constant.FIND_ZIPCODES_BY_CENTER:
      return { ...state, zipcodes: zipcodes };
    default:
      return state;
  }
};
