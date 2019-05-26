import { combineReducers } from "redux";
import usersReducers from "./usersReducers";

export default combineReducers({
  users: usersReducers
});

// Same things
/* const rootReducers = combineReducers({
  users: usersReducers
});
export default rootReducers; */
