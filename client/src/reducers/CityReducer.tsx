import { FETCH_CITY } from "../constants/actionConstants";

export default (cities = [], action: any) => {
  switch (action.type) {
    case FETCH_CITY:
      return action.payload;
    default:
      return cities;
  }
};
