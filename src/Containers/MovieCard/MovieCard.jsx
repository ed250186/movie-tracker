import React, { Component } from "react";
import "./MovieCard.scss";
import PropTypes from "prop-types";
import active from "../../images/bookmark-active.png";
import inactive from "../../images/bookmark-inactive.png";
import { connect } from "react-redux";
import { addNewFavorite, fetchFavoriteMovies } from "../../apiCalls/apiCalls";
import { addFavoriteMovie } from "../../actions/favoriteAction";

export class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
      error: "",
      movieInfo: false
    };
  }

  handleFavorites = async event => {
    event.preventDefault();
    const {
      favorites,
      id,
      userId,
      title,
      posterPath,
      releaseDate,
      voteAverage,
      overview
    } = this.props;
    console.log('fav', favorites)
    const addFav = await addNewFavorite(
      id,
      this.props.login.id,
      title,
      posterPath,
      releaseDate,
      voteAverage,
      overview
    );
    if (addFav) {
      this.props.addFavoriteMovie(addFav);
    } else {
      this.setState({ error: "Please login to be able to favorite a movie" });
    }
    if (this.props.login.loggedIn) {
      this.toggleFavorite();
    }
  };

  toggleFavorite = async (obj, url, func, err) => {
    try {
      await fetchFavoriteMovies(url, obj, func)
      let response = await fetch(`http://localhost:3000/api/users/${this.props.login.id}/favorites`)
      let favMovie = await response.json()
      await this.props.addFavoriteMovie(favMovie.data)
      console.log(this.props.addFavoriteMovie(favMovie.data))
    } catch(err) {
      console.log(err)
    }
    if (!this.state.favorited) {
      this.setState({ favorited: true });
    } else {
      this.setState({ favorited: false });
    }
  }


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
    const { title, posterPath, releaseDate } = this.props;
    return (
      <article className="movieCard">
        {this.state.error === "" ? <p /> : <p>{this.state.error}</p>}
        {this.state.movieInfo && this.infoCard()}
        <img
          src={this.state.favorited ? active : inactive}
          alt="inactive"
          className="inactive"
          onClick={this.handleFavorites}
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
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  addFavoriteMovie: movie => dispatch(addFavoriteMovie(movie))
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
