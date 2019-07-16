import React from 'react';
import './MovieContainer.scss';
import MovieCard from '../MovieCard/MovieCard.jsx'
import { setMovies } from '../../actions';
import { connect }  from 'react-redux';


const MovieContainer = () => {
    // const displayMovies = showMovies.movieData.map(movie => {
    //     return (<MovieCard movie={movie} />)
    // })
  return (
    <section>
      {/* { displayMovies } */}
    </section>
  )
}

// const mapStateToProps = state => ({
//     movies: showMovies(state.movies)
// });

// const mapDispatchToProps = dispatch => ({

// })



export default MovieContainer;