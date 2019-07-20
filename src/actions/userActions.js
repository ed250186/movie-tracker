export const grabUsers = grabUsers => ({
  type: "GRAB_USERS",
  grabUsers
});

export const addUsers = addUsers => ({
    type: "ADD_USERS",
    addUsers
});

export const signInUser = signInUser => ({
  type: "SIGNIN_USER",
  signInUser
});

// export const login = user => ({
//   type: 'LOGIN',
//   user
// })

export const signOutUser = signOutUser => ({
  type: "SIGNOUT_USER",
  signOutUser
});
