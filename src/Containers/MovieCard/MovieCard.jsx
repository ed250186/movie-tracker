import React, { Component } from "react";
import "./MovieCard.scss";
import PropTypes from "prop-types";
import active from '../../images/bookmark-active.png';
import inactive from "../../images/bookmark-inactive.png";
import { connect } from "react-redux";
import { addNewFavorite, fetchFavoriteMovies } from "../../apiCalls/apiCalls";
import { addFavoriteMovie } from "../../actions/favoriteAction";

export class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: null,
      favorited: false,
      error: "",
      movieInfo: false
    };
  }

  handleFavorites = async event => {
    event.preventDefault();
    const {
      id,
      userId,
      title,
      posterPath,
      releaseDate,
      voteAverage,
      overview
    } = this.props;
    const addFavoriteMovie = await addNewFavorite(
      id,
      this.props.login.id,
      title,
      posterPath,
      releaseDate,
      voteAverage,
      overview
    );
    if (addFavoriteMovie) {
      this.props.movieId(addFavoriteMovie);
    } else {
      this.setState({ error: "Please login to be able to favorite a movie" });
    }
    if (this.props.login.loggedIn) {
      this.toggleFavorite()
    }
  };

  toggleFavorite () {
    if (!this.state.favorited) {
      // this.addFavorite(this.props.user_id);
      console.log(this.state.favorited)
      this.setState({ favorited: true})
    } else {
      // this.deleteFavorite(userId, movieId);
      console.log(this.state.favorited)
      this.setState({ favorited: false})
    }
  }

  addFavorite = (userId) => {
    // const { movie } = this.props;
    addNewFavorite(userId)
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
    const { title, posterPath, releaseDate } = this.props;
    return (
      <article className="movieCard">
      {this.state.error === '' ? (<p></p>) : (<p>{this.state.error}</p>)}
        {this.state.movieInfo && this.infoCard()}
        <img src={this.state.favorited ? active : inactive} alt="inactive" className="inactive" onClick={this.handleFavorites} />
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
  movieId: state.movieId,
  login: state.login,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  movieId: id => dispatch(addFavoriteMovie(id))
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
