import { favoriteReducer } from "./favoriteReducer";

describe("favoriteReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = favoriteReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should add a favorite movie to state", () => {
    const action = {
      type: "ADD_FAVORITE_MOVIE",
      favorites: { favorites: "Batman" }
    };
    const expected = { favorites: "Batman" };
    const result = favoriteReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it("should be able to access all favorite movies from state", () => {
    const action = {
      type: "GET_FAVORITE_MOVIES",
      favorites: { favorites: "Batman" }
    };
    const expected = { favorites: "Batman" };
    const result = favoriteReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it("should be able to access all favorite movies from state", () => {
    const action = {
      type: "GET_FAVORITE_MOVIES",
      favorites: { favorites: "Batman" }
    };
    const expected = { favorites: "Batman" };
    const result = favoriteReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it("should be able to delete favorite movies from state", () => {
    const action = {
      type: "DELETE_FAVORITE_MOVIES",
      favorites: { favorites: "Batman" }
    };
    const expected = [];
    const result = favoriteReducer(undefined, action);
    expect(result).toEqual(expected);
  });
});
