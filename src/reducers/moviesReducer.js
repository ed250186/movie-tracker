export const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
          return [...state, ...action.movies];
        default:
          return state;
      }
    };