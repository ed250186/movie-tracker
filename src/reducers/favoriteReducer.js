export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE_MOVIE":
      return action.id;
    case "GET_FAVORITE_MOVIES":
      return action.favorites.data;
    default:
      return state;
  }
};
