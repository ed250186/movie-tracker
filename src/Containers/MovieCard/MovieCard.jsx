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

  addFavorites = () => {
    const {
      id,
      userId = this.props.login.id,
      title,
      posterPath,
      releaseDate,
      voteAverage,
      overview
    } = this.props;
    const addFav = addNewFavorite(
      id,
      userId,
      title,
      posterPath,
      releaseDate,
      voteAverage,
      overview
    );
    this.props.addFavoriteMovie(addFav);

    // if (addFav) {
    //   this.props.addFavoriteMovie(addFav);
    // } else {
    //   this.setState({ error: "Please login to be able to favorite a movie" });
    // }
    // if (this.props.login.loggedIn) {
    //   this.toggleFavorite();
    // }
  };

  // toggleFavorite = (obj, url, func, err) => {

  //     this.props.addFavoriteMovie(favMovie.data)

  //   if (!this.state.favorited) {
  //     this.setState({ favorited: true });
  //   } else {
  //     this.setState({ favorited: false });
  //     this.deleteFavoriteMovie(this.props.login.id, this.props.id)
  //   }
  // // }

  toggleFavorite = async (e) => {
    e.preventDefault();
    
    if (!this.props.login.loggedIn) {
      this.setState({ error: "Please login to be able to favorite a movie" });
    } else {
      const userId = this.props.login.id;
      let addFavorite = await fetchFavoriteMovies(userId);
      this.props.getFavoriteMovies(addFavorite);

      const { favorites, movies } = this.props;
        return favorites.find(fav => {
          if (!fav.movie_id == movies.id) {
            // this.addFavorites();
            // this.setState({ favorited: true });
            console.log('added')
          } else {
            // this.setState({ favorited: false });
            console.log(movies)
            console.log('hiiiiiiii')
          }
        });
      };
      console.log(this.props.favorites);
      // if(this.props.favorites){}
  };
    //   this.deleteFavoriteMovie(this.props.login.id, this.props.id);

  deleteFavoriteMovie = async (userId, movieId) => {
    const movieData = { user_id: userId, movie_id: movieId };
    await this.props.deleteFavoriteMovie(movieData);
    console.log("hiiiiiiiiiii");
    // await this.props.deleteFavoriteMovie(movieData)
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
        {this.state.error === "" ? <p /> : <p>{this.state.error}</p>}
        {this.state.movieInfo && this.infoCard()}
        <img
          src={this.state.favorited ? active : inactive}
          alt="inactive"
          className="inactive"
          onClick={e => this.toggleFavorite(e)}
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
  addFavoriteMovie: movie => dispatch(addFavoriteMovie(movie)),
  deleteFavoriteMovie: movie => dispatch(deleteFavoriteMovie(movie)),
  getFavoriteMovies: movie => dispatch(getFavoriteMovies(movie))
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
