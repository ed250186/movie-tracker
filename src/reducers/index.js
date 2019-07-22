import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import {
  grabUsersReducer,
  addUsersReducer,
  loginReducer,
  signOutUserReducer
} from "./usersReducer";
import { favoriteReducer } from './favoriteReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  grabUsers: grabUsersReducer,
  addUsers: addUsersReducer,
  login: loginReducer,
  favoriteMovies: favoriteReducer
});

export default rootReducer;
