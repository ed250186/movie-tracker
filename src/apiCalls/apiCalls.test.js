import { nowPlaying, allUsers } from "./apiCalls";

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
    nowPlaying("movies")
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
