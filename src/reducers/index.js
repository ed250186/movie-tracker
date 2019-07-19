import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import {
  grabUsersReducer,
  addUsersReducer,
  signInUserReducer,
  signOutUserReducer
} from "./usersReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  grabUsers: grabUsersReducer,
  addUsers: addUsersReducer,
  signInUser: signInUserReducer,
  signOutUser: signOutUserReducer
});

export default rootReducer;
