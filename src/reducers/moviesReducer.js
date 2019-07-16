export const moviesReducer = (state = [], action) => {
    switch(action.type) {
        case 'SHOW_MOVIES':
            return action.movieData
        default:
            return state;
    }
}