import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { grabUsersReducer, addUsersReducer, loginReducer} from './usersReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    grabUsers: grabUsersReducer,
    addUsers: addUsersReducer,
    login: loginReducer,
    // signOutUser: signOutUserReducer
})

export default rootReducer;
