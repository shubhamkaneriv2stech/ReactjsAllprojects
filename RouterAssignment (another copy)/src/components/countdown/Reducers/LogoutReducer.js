import { LOGOUT } from "../types/Types";

export const weatherDataInitialState = null;

const logoutReducer = (state = weatherDataInitialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case LOGOUT:
      return state;
    default:
      return state;
  }
};

export default logoutReducer;
