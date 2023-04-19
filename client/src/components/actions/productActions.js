import { FETCH_ALL } from "../../constants/actionConstants";

import * as api from "../../axios/indexAxios";

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
