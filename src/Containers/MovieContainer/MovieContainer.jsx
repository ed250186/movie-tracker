import React from "react";
import "./MovieContainer.scss";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { setMovies } from "../../actions";
import { connect } from "react-redux";

const MovieContainer = props => {
  const displayMovies = props.movies.movies.map(movie => (
    <MovieCard {...movie} key={movie.id} title={movie.title} />
  ));
  return <section>{displayMovies}</section>;
};

const mapStateToProps = state => ({
  movies: setMovies(state.movies)
});

export default connect(mapStateToProps)(MovieContainer);
