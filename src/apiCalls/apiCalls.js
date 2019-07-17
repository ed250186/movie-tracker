import { cleanMovies } from "./Cleaner.js";
import { baseUrl } from "./paths"
import { key } from "./apiKey"

export const nowPlaying = () => {
  return fetch(
    `${ baseUrl }movie/now_playing?api_key=${ key }&language=en-US&page=1`
  )
    .then(response => response.json())
    .then(data => cleanMovies(data));
};

export const allUsers = () => {
  return fetch('http://localhost:3000/api/users')
  .then(response => response.json())
  .then(data => data.data)
}

export const createUser = (url, user) => {
  return fetch(url, user)
    .then(response => response.json())
}

