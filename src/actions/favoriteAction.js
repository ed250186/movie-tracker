export const addFavoriteMovie = (movieId) => ({
    type: 'ADD_FAVORITE_MOVIE',
    movieId
})

export const getFavoriteMovies = (favorites) => ({
    type: 'GET_FAVORITE_MOVIES',
    favorites
})