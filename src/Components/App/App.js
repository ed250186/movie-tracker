import React, { Component } from "react";
import "./App.css";
import { nowPlaying } from "../../apiCalls/apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    nowPlaying()
      .then(movies => this.setState({ movies: movies}))
      .catch(this.setState({ error: 'Error fetching data' }));
    console.log('did this work')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
