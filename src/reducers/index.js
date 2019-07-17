import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { usersReducer } from './usersReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    users: usersReducer
})

export default rootReducer;