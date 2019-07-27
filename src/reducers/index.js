import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import headerNavbar from "./headerNavbarReducer";
import user from "./usersReducer";

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user
});

export default rootReducer;
