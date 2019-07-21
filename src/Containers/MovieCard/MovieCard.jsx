import React, { Component } from "react";
import "./MovieCard.scss";
import PropTypes from 'prop-types';
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
    const addFavoriteMovie = await addNewFavorite(id, userId, title, posterPath, releaseDate, voteAverage, overview)
    this.props.movieId(addFavoriteMovie);

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
        <button onClick={this.handleFavorites}>Add To Favorites</button>
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

const mapStateToProps = (state) => ({
  movieId: state.movieId
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
