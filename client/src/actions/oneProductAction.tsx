import { FETCH_ONE } from "../constants/actionConstants";

import * as api from "../axios/indexAxios";

export const fetchOneProduct = (id: any) => async (dispatch: any) => {
  try {
    const { data } = await api.getProduct(id);
    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
