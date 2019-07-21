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
    default:
      return state;
  }
};

// export const signOutUserReducer = (state = {}, action) => {
//   switch (action.type) {
//     case "SIGNOUT_USER":
//       return state;
//     default:
//       return state;
//   }
// };
