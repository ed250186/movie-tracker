import { cleanMovies } from "./Cleaner.js";
import { baseUrl } from "./paths"
import { key } from "./apiKey"

export const nowPlaying = () => {
  return fetch(
    `${ baseUrl }movie/now_playing?api_key=${ key }&language=en-US&page=1`
  )
    .then(response => response.json())
    .then(data => console.log(cleanMovies(data)));
};
