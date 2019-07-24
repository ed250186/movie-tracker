import { nowPlaying, allUsers, createUser, fetchUserSignIn, fetchFavoriteMovies, addNewFavorite, deleteFav } from "./apiCalls";

describe("nowPlaying", () => {
  let mockMovies;
  beforeEach(() => {
    mockMovies = [
      {
        id: "1",
        title: "Batman",
        overview: "Test overview",
        voteAverage: "5.5",
        posterPath: "www.test.come",
        releaseDate: "2019-05-06",
        genreIds: "12"
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovies)
      });
    });
  });

  it("should be called with all params", () => {
    const expected =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=736dcf01b7d9f4b284b47ebd12706a39&language=en-US&page=1";
    nowPlaying("movies");
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it("should throw an error if response is not ok", async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false
      });
    });
    await expect(nowPlaying()).resolves.toEqual(Error("Error fetching movies"));
  });
});

describe("allUsers", () => {
  let mockUsers;
  beforeEach(() => {
    mockUsers = {
      data: [
        {
          id: 1,
          name: "Taylor",
          password: "password",
          email: "tman2272@aol.com"
        }
      ]
    };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUsers)
      });
    });
  });

  it("should be called with all params", () => {
    const expected = "http://localhost:3000/api/users";
    allUsers("users");
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it("should throw an error if response is not ok", async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false
      });
    });
    await expect(allUsers()).resolves.toEqual(Error("Error fetching users"));
  });

});


describe("createUser", () => {
  let mockUsers;
  let mockResponse;
  beforeEach(() => {
    mockUsers = {name: 'name', users: 'users'};
    mockResponse = [
      {name: 'name1', users: 'users1'}.
      mockUsers
  ]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should be called with all params", () => {
    const expected = ["http://localhost:3000/api/users/new", {
      method: "POST",
      body: JSON.stringify(mockUsers),
      headers: {
        "Content-Type": "application/json"
      }
    }];
    createUser(mockUsers);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it("should throw an error if response is not ok", async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false
      });
    });
    await expect(createUser()).resolves.toEqual(Error("Error fetching users"));
  });

});

describe("fetchUserSignIn", () => {
  let mockUsers;
  beforeEach(() => {
    mockUsers = {name: 'name', users: 'users'}
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUsers)
      });
    });
  });

  it("should be called with all params", () => {
    const expected =
      ['http://localhost:3000/api/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(mockUsers)
          }];
    fetchUserSignIn(mockUsers);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it("should throw an error if response is not ok", async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false
      });
    });
    await expect(fetchUserSignIn()).resolves.toEqual(Error("Error fetching users"));
  });

});

describe("fetchFavoriteMovies", () => {
  let mockUsers;
  beforeEach(() => {
    mockUsers = {
      data: [
        {
          id: 1,
          name: "Taylor",
          password: "password",
          email: "tman2272@aol.com"
        }
      ]
    };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUsers)
      });
    });
  });

  it("should be called with all params", () => {
    const expected = "http://localhost:3000/api/users/users/favorites/";
    fetchFavoriteMovies("users");
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it("should throw an error if response is not ok", async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false
      });
    });
    await expect(fetchFavoriteMovies()).resolves.toEqual(Error("Error fetching favorite movies"));
  });

});