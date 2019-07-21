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

export const signOutUser = signOutUser => ({
  type: "SIGNOUT_USER",
  signOutUser
});

export const signInError = error => ({
  type: "SIGNIN_ERROR",
  error
});

export const signUpError = error => ({
  type: "SIGNUP_ERROR",
  error
})
