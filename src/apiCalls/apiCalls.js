import { cleanMovies } from "./Cleaner.js";

export const nowPlaying = () => {
  return fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=736dcf01b7d9f4b284b47ebd12706a39&language=en-US&page=1"
  )
    .then(response => response.json())
    .then(data => cleanMovies(data));
};
