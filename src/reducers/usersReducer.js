export const usersReducer = (state = [], action) => {
  switch(action.type) {
      case 'GRAB_USERS':
          return action.users
      default:
          return state;
  }
}