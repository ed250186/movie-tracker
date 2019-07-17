import React, { Component } from "react";
import "./App.scss";
import Aside from '../Aside/Aside.jsx'
import Header from '../Header/Header.jsx'
import MovieContainer from '../../Containers/MovieContainer/MovieContainer.jsx'
import { nowPlaying } from "../../apiCalls/apiCalls";
import { setMovies } from '../../actions';
import { connect }  from 'react-redux';
import SignIn from '../SignIn/SignIn.jsx'


class App extends Component {

  componentDidMount() {
    nowPlaying()
      .then(movies => this.props.setMovies(movies))
      .catch(this.setState({ error: 'Error fetching data' }));

  }


  render() {
    return (
      <div className="App">
        <Aside />
        <main>
          <Header />
          <MovieContainer />
          <SignIn />
        </main>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies))

})


export default connect(mapStateToProps, mapDispatchToProps)(App);
