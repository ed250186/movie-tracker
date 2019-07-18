import React, { Component } from "react";
import "./MovieContainer.scss";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { setMovies } from "../../actions";
import { connect } from "react-redux";
import { nowPlaying } from "../../apiCalls/apiCalls";

class MovieContainer extends Component {

  constructor(props) {
    super(props);
    this.state ={
      error: ''
    }
  }

  async componentDidMount() {
    await nowPlaying()
      .then(movies => this.props.setMovies(movies))
      .catch(this.setState({ error: 'Error fetching data' }));

  }
  render (){
    const { movies } = this.props;
    const displayMovies = movies.movies && movies.movies.map(movie => (
      <MovieCard {...movie} key={movie.id} title={movie.title} />
    ));
    return (
      <section>
        {displayMovies}
      </section>
    )
  }
};

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
