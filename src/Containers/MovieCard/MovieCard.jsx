import React, { Component } from "react";
import "./MovieCard.scss";
import PropTypes from 'prop-types';


export class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: null,
      isFav: false,
      error: ""
    };
  }

  render() {
    const { title, posterPath, releaseDate } = this.props;
    return (
      <article className="movieCard">
        <img className="card-img" src={posterPath} alt={`${title} poster`} />
        <p className="title">{title}</p>
        <p className="year">{releaseDate}</p>
      </article>
    );
  }
}

MovieCard.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string
}

export default MovieCard;
