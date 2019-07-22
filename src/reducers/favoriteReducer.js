export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE_MOVIE":
      return action.favorites
    default:
      return state;
  }
};
