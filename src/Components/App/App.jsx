import React, { Component } from "react";
import "./App.scss";
import Aside from '../Aside/Aside.jsx'
import Header from '../Header/Header.jsx'
import MovieContainer from '../../Containers/MovieContainer/MovieContainer.jsx'
// import { connect }  from 'react-redux';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Aside />
        <main>
          <Header />
          <MovieContainer />
          <SignIn />
        </main>
        {/* <SignUp/> */}
      </div>
    );
  }
}


export default App;
