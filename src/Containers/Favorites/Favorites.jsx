import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { connect } from "react-redux";
import { fetchFavoriteMovies } from "../../apiCalls/apiCalls";
import { addFavoriteMovie } from "../../actions/favoriteAction";

export class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFavMovies: false,
      error: ""
    };
  }
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
    console.log('fav', favorites)
    console.log(this.props)
    const faves = favorites.map(fav => {
      return movies.find(movie => {
        return movie.title === fav.title
      })
    })
    return this.displayFavoriteMovies(faves);
  }


  render() {
    
    return (
    <article>
      {!this.props.displayFavMovies && this.displayFavoriteMovies(this.props.movies)}
      {this.props.displayFavMovies && this.findFaves()}
    </article>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  movies: state.movies
});


export default connect(
  mapStateToProps
)(Favorites);
