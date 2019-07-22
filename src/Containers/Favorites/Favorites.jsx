import React from "react";
import MovieCard from '../MovieCard/MovieCard.jsx'
import { connect } from 'react-redux';

const Favorites = (props) => {
  const { favorites } = props;
    console.log(props)
  const displayFavoriteMovies = favorites.map(movie => (
    <MovieCard {...movie} key={movie.id} title={movie.title} />
  ));

  return (
      <article>
          {displayFavoriteMovies}
      </article>
  )
};

const mapStateToProps = state => ({
    favorites: state.favorites
})

export default connect(mapStateToProps)(Favorites)
