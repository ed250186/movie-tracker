import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';

const rootReducer = combineReducers({
    movies: moviesReducer
})

export default rootReducer;