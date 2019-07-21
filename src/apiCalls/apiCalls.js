import { cleanMovies } from "./Cleaner.js";
import { baseUrl, backendUrl } from "./paths";
import { key } from "./apiKey";

export const nowPlaying = () => {
  return fetch(
    `${baseUrl}movie/now_playing?api_key=${key}&language=en-US&page=1`
  )
    .then(response => response.json())
    .then(data => cleanMovies(data))
    .catch(error => Error("Error fetching movies"));
};

export const allUsers = () => {
  return fetch("http://localhost:3000/api/users")
    .then(response => response.json())
    .then(data => data.data);
};

export const createUser = (url, user) => {
  return fetch(url, user).then(response => response.json());
};

export const fetchUserSignIn = (email, password) => {
  const user = { email: email, password: password };
  return fetch(backendUrl, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => console.log("Error:", error));
};

export const addNewFavorite = (
  id, userId, title, posterPath, releaseDate, voteAverage, overview
) => {
  const favoriteMovie = {
    movie_id: id,
    user_id: userId,
    title: title,
    poster_path: posterPath,
    release_date: releaseDate,
    vote_average: voteAverage,
    overview: overview
  };
  console.log(favoriteMovie)
  return fetch(`${backendUrl}/favorites/new`, {
    method: "POST",
    body: JSON.stringify(favoriteMovie),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => console.log("Error:", error));
};
