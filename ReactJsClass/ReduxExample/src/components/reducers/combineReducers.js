import { authenticationReducer } from "./authenticationReducer";
import { combineReducers } from "redux";
import { bankReducer } from "./bankReducer";

export const rootReducer = combineReducers({
  auth: authenticationReducer,
  banking: bankReducer,
});
