import React, { Component } from "react";
import "./App.scss";
import { apiCalls } from "../../apiCalls/apiCalls.js";
import Aside from '../Aside/Aside.jsx'
import Header from '../Header/Header.jsx'
import MovieContainer from '../../Containers/MovieContainer/MovieContainer.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    apiCalls()
      .then(movies => this.setState({ movies: movies}))
      .catch(this.setState({ error: 'Error fetching data' }));
    console.log('did this work')
  }

  render() {
    return (
      <div className="App">
        <Aside/>
        <main>
          <Header/>
          <MovieContainer/>
        </main>
      </div>
    );
  }
}

export default App;
