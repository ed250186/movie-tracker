export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE_MOVIE":
      const addFavorite = [...state].map(movie => {
        if(movie.id === action.movieId){
          movie.favorites = !movie.favorites
        }
        return movie;
      })
    // case "GET_FAVORITE_MOVIES":
    //   return action.favorites.data;
    default:
      return state;
  }
};
