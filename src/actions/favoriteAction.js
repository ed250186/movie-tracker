export const addFavoriteMovie = (movieId, userId) => ({
    type: 'ADD_FAVORITE_MOVIE',
    movieId,
    userId
})

export const getFavoriteMovies = (favorites) => ({
    type: 'GET_FAVORITE_MOVIES',
    favorites
})