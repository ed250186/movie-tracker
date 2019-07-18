import React, { Component } from "react";
import "./App.scss";
import Aside from '../Aside/Aside.jsx'
import Header from '../Header/Header.jsx'
import MovieContainer from '../../Containers/MovieContainer/MovieContainer.jsx'
// import { connect }  from 'react-redux';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp'
import { Route } from "react-router-dom";


class App extends Component {

  main = () => (
    <>
    <Aside/>
    <main>
      <Header />
      <MovieContainer />
    </main>
    </>
  )

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={() => this.main()} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    );
  }
}


export default App;
