import React, { Component } from 'react';
import "./FavoriteContainer.scss";
import Favorites from "../Favorites/Favorites";
import { connect }  from 'react-redux';
import { getFavoriteMovies } from "../../actions/";
import { fetchFavoriteMovies } from "../../apiCalls/apiCalls";
import { NavLink } from 'react-router-dom'

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
        path={`${movie.poster_path}`}
        key={movie.id} 
        title={movie.title} 
        releaseDate={movie.release_date}
      />
    ));
    return (
      <section>
        <header>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
          <h1 className='header-favs'>Your Favorite Movies</h1>
        </header>
        <div className="movie-container">
          {displayFavoriteMovies}
        </div>
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
