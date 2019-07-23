import React, { Component } from "react";
import "./MovieCard.scss";
import PropTypes from "prop-types";
import active from "../../images/star-active.png";
import inactive from "../../images/star-inactive.png";
import { connect } from "react-redux";
import {
  addNewFavorite,
  fetchFavoriteMovies,
  deleteFav
} from "../../apiCalls/apiCalls";
import {
  addFavoriteMovie,
  deleteFavoriteMovie,
  getFavoriteMovies
} from "../../actions/favoriteAction";

export class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
      error: "",
      movieInfo: false
    };
  }

  handleFavorite = e => {
    e.preventDefault();
    const { login, movies } = this.props;
    console.log(movies);
    if (login.id) {
      this.toggleFavorite(login.id, movies.movie_id);
    } else {
      this.setState({ error: "Please login to be able to favorite a movie" });
    }
  };

  addFavorites = (userId) => {
    const{ movies } = this.props
    addNewFavorite(userId, movies).then(() =>
      fetchFavoriteMovies(userId).then(favorites =>
        this.props.getFavoriteMovies(favorites)
      )
    );
  };

  toggleFavorite = (userId, movieId) => {
    const { favorites } = this.props;
    const id = favorites.map(movie => movie.movie_id);
    console.log(id);
    if (!id.includes(movieId)) {
      console.log(this.addFavorites(userId));
      this.setState({ favorited: true });
    } else {
      this.deleteFavoriteMovie(userId, movieId);
      this.setState({ favorited: false });
    }
  };

  deleteFavoriteMovie = (userId, movieId) => {
    deleteFav(userId, movieId).then(() =>
      fetchFavoriteMovies(userId).then(favorites =>
        this.props.getFavoriteMovies(favorites)
      )
    );
  };

  toggleView = view => {
    this.setState({ movieInfo: view });
  };

  infoCard = () => {
    const { title, backDropPath, voteAverage, overview } = this.props;
    return (
      <article className="infoCard">
        <img
          src={backDropPath}
          alt={title + "background image"}
          onClick={() => this.toggleView(false)}
        />
        <p className="title">
          {title} | {voteAverage}/10
        </p>
        <p className="overview">{overview}</p>
      </article>
    );
  };

  render() {
    const { title, posterPath, releaseDate, favorites } = this.props;
    return (
      <article className="movieCard">
        {this.state.error === "" ? <p /> : <p>{this.state.error}</p>}
        {this.state.movieInfo && this.infoCard()}
        <img
          src={this.state.favorited ? active : inactive}
          alt="inactive"
          className="inactive"
          onClick={e => this.handleFavorite(e)}
        />
        <img
          className="card-img"
          src={posterPath}
          alt={`${title} poster`}
          onClick={() => this.toggleView(true)}
        />
        <p className="title">{title}</p>
        <p className="year">{releaseDate}</p>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  login: state.login,
  favorites: state.favorites,
  userId: state.userId
});

const mapDispatchToProps = dispatch => ({
  addFavoriteMovie: favorites => dispatch(addFavoriteMovie(favorites)),
  deleteFavoriteMovie: favorites => dispatch(deleteFavoriteMovie(favorites)),
  getFavoriteMovies: favorites => dispatch(getFavoriteMovies(favorites))
});

MovieCard.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);
