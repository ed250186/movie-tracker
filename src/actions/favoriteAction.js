export const addFavoriteMovie = (id) => ({
    type: 'ADD_FAVORITE_MOVIE',
    id
})

export const getFavoriteMovies = (favorites) => ({
    type: 'GET_FAVORITE_MOVIES',
    favorites
})