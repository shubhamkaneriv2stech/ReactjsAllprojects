import { combineReducers } from "redux";
import reducer from "./Reducers";
import weatherApiReducer from "./Reducer2";
import postsApiReducer from "./PostmanagementReducer";

const rootReducer = combineReducers({
  reducer,
  weatherApiReducer,
  postsApiReducer,
});
export default rootReducer;
