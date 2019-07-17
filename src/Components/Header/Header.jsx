import React from "react";
import { BrowserRouter as Router, NavLink} from 'react-router-dom'
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Router>
        <NavLink to='/'><h1>Movie Tracker</h1></NavLink>
      </Router>
      <Router>
        <div className='btn-container'>
        <NavLink to='/signin' className="style-header-btns"><button>SignIn</button></NavLink>
        <NavLink to='/signup' className="style-header-btns"><button>SignUp</button></NavLink>
        </div>
      </Router>
    </header>
  );
};

export default Header;
