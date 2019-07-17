import React, { Component } from "react";
import "./App.scss";
import Aside from '../Aside/Aside.jsx'
import Header from '../Header/Header.jsx'
import MovieContainer from '../../Containers/MovieContainer/MovieContainer.jsx'
import { nowPlaying, userList } from "../../apiCalls/apiCalls";
import { setMovies } from '../../actions';
import { connect }  from 'react-redux';
import SignUp from '../SignUp/SignUp.jsx'

class App extends Component {

  componentDidMount() {
    userList()
      .then(data => console.log(data.data))

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
        </main>
        <SignUp/>
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
