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

export const fetchFavoriteMovies = (userId) => {
  return fetch(`${backendUrl}/${userId}/favorites/`)
  .then(res => res.json())
  .then(movies => movies.data)
  .catch(error => console.log(error));
};

export const addNewFavorite = (userId, movie) => {
  const favoriteMovie = {
    movie_id: movie.id,
    user_id: userId,
    title: movie.title,
    poster_path: movie.posterPath,
    release_date: movie.releaseDate,
    vote_average: movie.voteAverage,
    overview: movie.overview
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

export const deleteFav = async (userId, movieId) => {
  await fetch(`${backendUrl}/${userId}/favorites/${movieId}`, {
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}