import React, { Component } from "react";
import "./MovieCard.scss";

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
        {console.log({title})}
        <p className="year">{releaseDate}</p>
      </article>
    );
  }
}

export default MovieCard;
