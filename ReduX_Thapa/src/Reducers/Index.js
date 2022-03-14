import { combineReducers } from "redux";
import changeNumber from "./UpDown";
import mulDiv from "./MULDIV";
const rootReducer = combineReducers({
  changeNumber,
  mulDiv,
});
export default rootReducer;
