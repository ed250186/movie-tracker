import React, { Component } from "react";
import "./MovieCard.scss";
import PropTypes from 'prop-types';
// import active from '../../images/bookmark-active.png';
import inactive from '../../images/bookmark-inactive.png';


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
    const { title, backDropPath, voteAverage, overview } = this.props;
    return (
      <article className='infoCard'>
        <img 
          src={backDropPath} 
          alt={title + 'background image'}
          onClick={() => this.toggleView(false)}
        />
        <p>{title}</p>
        <p>{voteAverage}</p>
        <p>{overview}</p>
      </article>
    )
  }

  render() {
    const { title, posterPath, releaseDate } = this.props;
    return (
      <article className="movieCard">
        { this.state.movieInfo && this.infoCard()}
        <img src={inactive} alt='inactive' className='inactive'/>
        <img 
          className="card-img" 
          src={posterPath} alt={`${title} poster`} 
          onClick={() => this.toggleView(true)}
        />
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
