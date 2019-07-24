import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { connect } from "react-redux";
import { imageUrl } from '../../apiCalls/paths'

export class Favorites extends Component {
  // constructor(props) {
  //   super(props);
  // }
  displayFavoriteMovies = movies => {
    return movies.map(movie => {
      return <MovieCard 
        {...movie} 
        key={movie.id} 
        title={movie.title} 
        />
    })
  };

  findFaves = () => {
    const { favorites, movies } = this.props;
    // console.log('fav', favorites)
    // console.log(this.props)
    const faves = favorites.map(fav => {
      return movies.find(movie => {
        return movie.title === fav.title
      })
    })
    return this.displayFavoriteMovies(faves);
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
