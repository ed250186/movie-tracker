import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOutUser, signInUser } from "../../actions/userActions";
import "./Header.scss";

const Header = props => {
  const compareLoginOrLogout = props.signInUser.loggedIn
    ? "Sign Out"
    : "Sign In";
  const welcomeBanner = props.signInUser.loggedIn
    ? 'Welcome Back!'
    : "";

  return (
    <header>
      <NavLink to="/">
        <h1>Movie Tracker</h1>
      </NavLink>
      <div className="btn-container">
      <p className="welcome">{welcomeBanner}</p>
        <NavLink to="/signin" className="style-header-btns">
          <button>SignIn</button>
        </NavLink>
        <NavLink to="/signup" className="style-header-btns">
          <button>SignUp</button>
        </NavLink>
        {props.user && (
          <button onClick={() => props.signOutUser({})}>SignOut</button>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  signInUser: state.login
});

const mapDispatchToProps = dispatch => ({
  signOutUser: user => dispatch(signOutUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
