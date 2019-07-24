import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import HeaderNavBar from "./headernavbarReducer";

const rootReducer = combineReducers({
  form,
  HeaderNavBar
});

export default rootReducer;
