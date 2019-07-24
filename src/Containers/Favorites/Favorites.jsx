import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { connect } from "react-redux";
import { imageUrl } from '../../apiCalls/paths'

const Favorites = ({favorites}) => {
console.log('test', favorites)
  const displayFavoriteMovies = favorites.map(movie => (
      <MovieCard 
        path={`${imageUrl}${movie.poster_path}`}
        key={movie.id} 
        title={movie.title} 
        />
    ));

    return (
    <article>
      <h2>Favorite movies</h2>
      {displayFavoriteMovies}
    </article>
    );
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  movies: state.movies
});


export default connect(mapStateToProps)(Favorites);
