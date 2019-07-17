import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <h1>Movie Tracker</h1>
      <div className="style-header-btns">
        <button>SignIn</button>
        <button>SignUp</button>
      </div>
    </header>
  );
};

export default Header;
