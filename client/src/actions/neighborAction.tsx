import { FETCH_NEIGHBORHOOD } from "../constants/actionConstants";

import * as api from "../axios/indexAxios";

export const fetchNeighbor = (district_id: any) => async (dispatch: any) => {
  try {
    const { data } = await api.getDataNeighborhood(district_id);
    dispatch({ type: FETCH_NEIGHBORHOOD, payload: data });
  } catch (error) {
    console.log(error);
  }
};
