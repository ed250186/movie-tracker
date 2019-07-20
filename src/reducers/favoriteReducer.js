export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE_MOVIE":
      return action.favorite;
    case "GET_FAVORITE_MOVIES":
      return action.favorites;
    default:
      return state;
  }
};
