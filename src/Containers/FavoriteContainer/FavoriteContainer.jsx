import React, { Component } from 'react';
import "./FavoriteContainer.scss";
import Favorites from "../Favorites/Favorites";
import { connect }  from 'react-redux';
import { imageUrl } from '../../apiCalls/paths'
import { getFavoriteMovies } from "../../actions/favoriteAction";
import { fetchFavoriteMovies } from "../../apiCalls/apiCalls";

class FavoriteContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: ""
    }
  }
  
  componentDidMount() {
    fetchFavoriteMovies(this.props.login.id)
      .then(data => data)
      .then(favMovies => this.props.getFavoriteMovies(favMovies))
      .catch(this.setState({error: "Please log in to view your favorites."}))
  }

  render(){
    const {favorites} = this.props;
    console.log(favorites)
    const displayFavoriteMovies = favorites.map(movie => (
      <Favorites
        path={`${imageUrl}${movie.poster_path}`}
        key={movie.id} 
        title={movie.title} 
        releaseDate={movie.release_date}
      />
    ));
    return (
      <section>
        <h1>Your Favorite Movies</h1>
        {displayFavoriteMovies}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  getFavoriteMovies: favorites => dispatch(getFavoriteMovies(favorites))
})


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteContainer);
