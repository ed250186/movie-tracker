export const addFavoriteMovie = (favorites, userId) => ({
    type: 'ADD_FAVORITE_MOVIE',
    favorites,
    userId
})

export const getFavoriteMovies = (favorites) => ({
    type: 'GET_FAVORITE_MOVIES',
    favorites
})

export const deleteFavoriteMovie = (favorites) => ({
    type: 'DELETE_FAVORITE_MOVIE',
    favorites
})