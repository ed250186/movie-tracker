import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";


const Header = () => {
  return (
    <header>
        <NavLink to="/">
          <h1>Movie Tracker</h1>
        </NavLink>
        <div className="btn-container">
          <NavLink to="/signin" className="style-header-btns">
            <button>SignIn</button>
          </NavLink>
          <NavLink to="/signup" className="style-header-btns">
            <button>SignUp</button>
          </NavLink>
        </div>
    </header>
  );
};

export default Header;
