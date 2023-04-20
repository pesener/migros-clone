import { FETCH_DISTRICT } from "../constants/actionConstants";

export default (districts = [], action: any) => {
  switch (action.type) {
    case FETCH_DISTRICT:
      return action.payload;
    default:
      return districts;
  }
};
