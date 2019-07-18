import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./Header.scss";
import MovieContainer from "../../Containers/MovieContainer/MovieContainer.jsx";
import SignIn from "../SignIn/SignIn.jsx";
import SignUp from "../SignUp/SignUp.jsx";

const Header = () => {
  return (
    <header>
      <Router>
        <NavLink to="/">
          <h1>Movie Tracker</h1>
        </NavLink>
      </Router>
      <Router>
        <div className="btn-container">
          <NavLink to="/signin" className="style-header-btns">
            <button>SignIn</button>
          </NavLink>
          <NavLink to="/signup" className="style-header-btns">
            <button>SignUp</button>
          </NavLink>
        </div>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Router>
    </header>
  );
};

export default Header;
