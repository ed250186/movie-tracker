import React, {Component} from "react";
import MovieCard from '../MovieCard/MovieCard.jsx'
import { connect } from 'react-redux';
import { fetchFavoriteMovies }  from '../../apiCalls/apiCalls'
import { addFavoriteMovie } from '../../actions/favoriteAction';

class Favorites extends Component {
  constructor(props) {
    super(props);
    console.log('props', props)
  }
  async componentDidMount() {
    await fetchFavoriteMovies()
      .then(favorites => this.props.addFavoriteMovie(favorites))
      .catch(this.setState({ error: "Error fetching data" }));
  }

  render() {
    const { favorites } = this.props;
  const displayFavoriteMovies = favorites.map(movie => (
    <MovieCard {...movie} key={movie.id} title={movie.title} />
  ));
  return (
      <article>
          {displayFavoriteMovies}
      </article>
  )
  }
};

const mapStateToProps = state => ({
  favorites: state.favorites
})

const mapDispatchToProps = dispatch => ({
  addFavoriteMovie: favorites => dispatch(addFavoriteMovie(favorites))
})

export default connect(mapStateToProps)(Favorites)
