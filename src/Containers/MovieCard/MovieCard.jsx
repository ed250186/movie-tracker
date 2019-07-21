import React, { Component } from "react";
import "./MovieCard.scss";
import PropTypes from 'prop-types';
// import active from '../../images/bookmark-active.png';
import inactive from '../../images/bookmark-inactive.png';
import { connect } from 'react-redux';
import { addNewFavorite } from '../../apiCalls/apiCalls';
import { addFavoriteMovie } from '../../actions/favoriteAction';


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

  handleFavorites = async event => {
    event.preventDefault();
    const { id, userId, title, posterPath, releaseDate, voteAverage, overview } = this.props
    const addFavoriteMovie = await addNewFavorite(id, this.props.login.id, title, posterPath, releaseDate, voteAverage, overview)
    this.props.movieId(addFavoriteMovie);

  }

  toggleView = (view) => {
    this.setState({movieInfo: view})
  }

  infoCard = () => {
    const { title, backDropPath, voteAverage, overview } = this.props;
    return (
      <article className='infoCard'>
        <img 
          src={backDropPath} 
          alt={title + 'background image'}
          onClick={() => this.toggleView(false)}
        />
        <p className="title">{title} | {voteAverage}/10</p>
        <p className='overview'>{overview}</p>
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

const mapStateToProps = (state) => ({
  movieId: state.movieId,
  login: state.login
})

const mapDispatchToProps = (dispatch) => ({
  movieId: id => dispatch(addFavoriteMovie(id))
})

MovieCard.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
