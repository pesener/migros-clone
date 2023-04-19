import { FETCH_ALL } from "../constants/actionConstants";

export default (links = [], action: any) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return links;
  }
};
