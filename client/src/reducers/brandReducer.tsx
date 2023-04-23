import { FETCH_BRAND } from "../constants/actionConstants";

export default (brands = [], action: any) => {
  switch (action.type) {
    case FETCH_BRAND:
      return action.payload;
    default:
      return brands;
  }
};
