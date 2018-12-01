import { combineReducers } from "redux";

//IMPORT REDUCERS
import { myPostReducer } from "./mypost";

//HERE COMBINE THE REDUCERS
export default combineReducers({
  myPostReducer: myPostReducer
});
