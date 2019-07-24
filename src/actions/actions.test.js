import * as actions from './index';

describe('actions', () => {
    it('should have a type of SET_MOVIES', () => {
        //setup
        const movies = {movies: "Batman"}
        const expectedAction = {
            type: "SET_MOVIES",
            movies: movies
        };
        //exectution
        const result = actions.setMovies(movies);
        //expectation
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of ADD_FAVORITE_MOVIE', () => {
        //setup
        const favorites = {favorites: "Batman"}
        const expectedAction = {
            type: "ADD_FAVORITE_MOVIE",
            favorites: favorites
        };
        //exectution
        const result = actions.addFavoriteMovie(favorites);
        //expectation
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of GET_FAVORITE_MOVIES', () => {
        //setup
        const favorites = {favorites: "Batman"}
        const expectedAction = {
            type: "GET_FAVORITE_MOVIES",
            favorites: favorites
        };
        //exectution
        const result = actions.getFavoriteMovies(favorites);
        //expectation
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of DELETE_FAVORITE_MOVIE', () => {
        //setup
        const favorites = {favorites: "Batman"}
        const expectedAction = {
            type: "DELETE_FAVORITE_MOVIE",
            favorites: {favorites: "Batman"}
        };
        //exectution
        const result = actions.deleteFavoriteMovie(favorites);
        //expectation
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of GRAB_USERS', () => {
        //setup
        const grabUsers = {grabUsers: "Nathan"}
        const expectedAction = {
            type: "GRAB_USERS",
            grabUsers: grabUsers
        };
        //exectution
        const result = actions.grabUsers(grabUsers);
        //expectation
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of ADD_USERS', () => {
        //setup
        const addUsers = {addUsers: "Nathan", addUsers: "Emily"}
        const expectedAction = {
            type: "ADD_USERS",
            addUsers: addUsers
        };
        //exectution
        const result = actions.addUsers(addUsers);
        //expectation
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of SIGNIN_USER', () => {
        //setup
        const signInUser = {signInUser: "Nathan@email.com"}
        const expectedAction = {
            type: "SIGNIN_USER",
            signInUser: signInUser
        };
        //exectution
        const result = actions.signInUser(signInUser);
        //expectation
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of SIGNOUT_USER', () => {
        //setup
        const signOutUser = {signOutUser: "Nathan@email.com"}
        const expectedAction = {
            type: "SIGNOUT_USER",
            signOutUser: signOutUser
        };
        //exectution
        const result = actions.signOutUser(signOutUser);
        //expectation
        expect(result).toEqual(expectedAction);
    });
});