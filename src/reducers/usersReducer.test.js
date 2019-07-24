import {
  grabUsersReducer,
  addUsersReducer,
  loginReducer
} from "./usersReducer.js";

describe("usersReducer", () => {
  describe("grabUsersReducer", () => {
    it("should return initial state", () => {
      const expected = [];
      const result = grabUsersReducer(undefined, {});

      expect(result).toEqual(expected);
    });

    it("should grab all users from state", () => {
      const action = {
        type: "GRAB_USERS",
        grabUsers: { name: "Tif", id: 1, email: "tif@aol.com" }
      };
      const expected = { name: "Tif", id: 1, email: "tif@aol.com" };
      const result = grabUsersReducer(undefined, action);

      expect(result).toEqual(expected);
    });
  });
  describe("addUsersReducer", () => {
    it("should return initial state", () => {
      const expected = [];
      const result = addUsersReducer(undefined, {});

      expect(result).toEqual(expected);
    });

    it("should be able to add user on sign up", () => {
        // const state = []
      const action = {
        type: "ADD_USER",
        addUsers: { name: "Tif", id: 2, email: "tif@aol.com" }
      };
      const expected = []

      const result = addUsersReducer(undefined, action)

      expect(result).toEqual(expected)
    });
  });
  describe("loginReducer", () => {
    it("should return initial state", () => {
      const expected = {};
      const result = loginReducer(undefined, {});

      expect(result).toEqual(expected);
    });
  });
});
