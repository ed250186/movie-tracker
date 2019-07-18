import React, { Component } from "react";
import "./App.scss";
import Aside from '../Aside/Aside.jsx'
import Header from '../Header/Header.jsx'
import MovieContainer from '../../Containers/MovieContainer/MovieContainer.jsx'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Aside />
        <main>
          <Header />
          <MovieContainer />
        </main>
      </div>
    );
  }
}


export default App;
