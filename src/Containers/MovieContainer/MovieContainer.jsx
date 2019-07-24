import React, { Component } from "react";
import "./MovieContainer.scss";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { setMovies } from "../../actions/index";
import { connect } from "react-redux";
import { nowPlaying } from "../../apiCalls/apiCalls";
import PropTypes from "prop-types";

export class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }

  componentDidMount() {
    nowPlaying()
      .then(data => data)
      .then(movies => this.props.setMovies(movies))
      .catch(this.setState({ error: "Error fetching data" }));
  }
  render() {
    const { movies } = this.props;
    const displayMovies = movies.map(movie => (
      <MovieCard {...movie} key={movie.id} title={movie.title} />
    ));
    return <section>{displayMovies}</section>;
  }
}

export const mapStateToProps = state => ({
  movies: state.movies
});

export const mapDispatchToProps = dispatch => ({
  setMovies: movies => dispatch(setMovies(movies))
});

MovieContainer.propTypes = {
  movies: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
