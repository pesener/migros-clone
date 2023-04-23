import { FETCH_CITY } from "../../constants/actionConstants";

import * as api from "../../axios/indexAxios";

export const fetchCity = () => async (dispatch: any) => {
  try {
    const { data } = await api.getDataCity();
    dispatch({ type: FETCH_CITY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
