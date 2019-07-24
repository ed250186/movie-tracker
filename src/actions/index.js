export const setMovies = movies => ({
    type: 'SET_MOVIES',
    movies
});

export const addFavoriteMovie = favorites => ({
  type: "ADD_FAVORITE_MOVIE",
  favorites
});

export const getFavoriteMovies = favorites => ({
  type: "GET_FAVORITE_MOVIES",
  favorites
});

export const deleteFavoriteMovie = favorites => ({
  type: "DELETE_FAVORITE_MOVIE",
  favorites
});

export const grabUsers = grabUsers => ({
  type: "GRAB_USERS",
  grabUsers
});

export const addUsers = addUsers => ({
  type: "ADD_USERS",
  addUsers
});

export const signInUser = signInUser => ({
  type: "SIGNIN_USER",
  signInUser
});

export const signOutUser = signOutUser => ({
  type: "SIGNOUT_USER",
  signOutUser
});
