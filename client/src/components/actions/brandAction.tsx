import { FETCH_BRAND } from "../../constants/actionConstants";

import * as api from "../../axios/indexAxios";

export const fetchBrand = () => async (dispatch: any) => {
  try {
    const { data } = await api.getDataBrand();
    dispatch({ type: FETCH_BRAND, payload: data });
  } catch (error) {
    console.log(error);
  }
};
