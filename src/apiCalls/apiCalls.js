import { cleanMovies } from './Cleaner.js';

export const apiCalls = () => {
  return fetch(
    "https://api.themoviedb.org/3/movie/76341?api_key=736dcf01b7d9f4b284b47ebd12706a39"
  )
  .then(response => response.json())
  .then(data => cleanMovies(data))
};
