import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import {
  grabUsersReducer,
  addUsersReducer,
  loginReducer
} from "./usersReducer";
import { favoriteReducer } from './favoriteReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  grabUsers: grabUsersReducer,
  addUsers: addUsersReducer,
  login: loginReducer,
  favorites: favoriteReducer
});

export default rootReducer;
