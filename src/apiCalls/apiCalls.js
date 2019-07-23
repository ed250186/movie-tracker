import { cleanMovies } from "./Cleaner.js";
import { baseUrl, backendUrl } from "./paths";
import { key } from "./apiKey";
import { signInError, signInUser } from '../actions/userActions'

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

export const createUser = (name, email, password) => {
  const user = {name: name, email: email, password: password}
  return fetch(`${backendUrl}/new`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(error => error);
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
    .catch(error => console.log(error));
};

export const fetchFavoriteMovies = async (url, obj, func, err) => {
  const response = await fetch (url, {
    method: func,
    headers: {
      'Content-Type': 'applications/json'
    },
    body: JSON.stringify(obj)
  })
    .then(response => response.json())
    .catch(error => error)
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
