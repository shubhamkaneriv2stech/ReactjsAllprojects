import { SET_POSTSDATA } from "../types/Types";
import { LOGOUT } from "../types/Types";
export const postsDataInitialState = null;

const postsApiReducer = (state = postsDataInitialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SET_POSTSDATA:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

export default postsApiReducer;
