export const grabUsersReducer = (state = [], action) => {
  switch (action.type) {
    case "GRAB_USERS":
      return action.grabUsers;
    default:
      return state;
  }
};

export const addUsersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USERS":
      return [...state, action.addUsers];
    case "SIGNUP_ERROR":
      return state = 'Email already exists in system. Please log in.'
    default:
      return state;
  }
};

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNIN_USER":
      return { ...action.signInUser, loggedIn: true, favorites: [] };
    case "SIGNOUT_USER":
      return (state = {});
    case "SIGNIN_ERROR":
      return {error: 'Please enter in correct username or password', loggedIn: false}
    default:
      return state;
  }
};
