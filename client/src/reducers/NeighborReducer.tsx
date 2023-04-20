import { FETCH_NEIGHBORHOOD } from "../constants/actionConstants";

export default (neighborhoods = [], action: any) => {
  switch (action.type) {
    case FETCH_NEIGHBORHOOD:
      return action.payload;
    default:
      return neighborhoods;
  }
};
