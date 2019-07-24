import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { connect } from "react-redux";
import { imageUrl } from '../../apiCalls/paths'

class Favorites extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {favorites} = this.props
    console.log(favorites)
    const displayFavoriteMovies = favorites.map(movie => (
        <MovieCard 
          path={movie.poster_path}
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
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  movies: state.movies
});


export default connect(mapStateToProps)(Favorites);
