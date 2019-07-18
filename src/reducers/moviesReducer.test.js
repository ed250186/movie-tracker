import { moviesReducer } from './moviesReducer.js';

describe('moviesReducer', () => {
    it('should return the initial state', () => {
        const expected = [];
        const result = moviesReducer(undefined, {});
        expect(result).toEqual(expected);
    });

    it('should set all movies from state', () => {
        const action = {
            type: "SET_MOVIES",
            movies: "Batman"
        };
        const expected = "Batman";
        const result = moviesReducer(undefined, action);
        expect(result).toEqual(expected);
    });
});