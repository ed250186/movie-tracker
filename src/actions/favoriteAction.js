export const addFavoriteMovie = (favorites) => ({
    type: 'ADD_FAVORITE_MOVIE',
    favorites
})

export const getFavoriteMovies = (favorites) => ({
    type: 'GET_FAVORITE_MOVIES',
    favorites
})