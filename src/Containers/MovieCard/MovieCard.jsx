import React, { Component } from "react";
import "./MovieCard.scss";
import PropTypes from 'prop-types';


export class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: null,
      isFav: false,
      error: "",
      movieInfo: false
    };
  }

  toggleView = (view) => {
    this.setState({movieInfo: view})
    console.log(this.props)
    console.log(this.state.movieInfo)
  }

  movieCard = () => {
    const { title, posterPath, releaseDate } = this.props;
    return (
    <article 
        className="movieCard" 
        onClick={() => this.toggleView(true)}>
        <img className="card-img" src={posterPath} alt={`${title} poster`} />
        <p className="title">{title}</p>
        <p className="year">{releaseDate}</p>
      </article>
  )}

  infoCard = () => {
    const { title } = this.props;
    return (
      <article 
        className='infoCard'
        onClick={() => this.toggleView(false)}
      >
        <p>movie info</p>
        <p>{title}</p>
      </article>
    )
  }

  cards = () => {
    if(this.state.movieInfo) {
      return this.infoCard()
    } else {
      return this.movieCard()
    }
  }

  render() {
    return (
      <>
      {this.state.movieInfo && this.infoCard()}
      {!this.state.movieInfo && this.movieCard()}
      </>
    );
  }
}

MovieCard.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string
}

export default MovieCard;
