import { FETCH_ONE } from "../constants/actionConstants";

export default (linkOne = [], action: any) => {
  switch (action.type) {
    case FETCH_ONE:
      return action.payload;
    default:
      return linkOne;
  }
};
