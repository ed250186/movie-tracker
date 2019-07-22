import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOutUser } from "../../actions/userActions";
import "./Header.scss";

export const Header = props => {
  const welcomeBanner = props.login.loggedIn
    ? `Welcome back, ${props.login.name}!`
    : "";

  const signOut = (event) => {
    event.preventDefault();
    props.signOutUser(signOutUser)
  }

  const btns = props.login.loggedIn ? (
    <button onClick={event => signOut(event)}>SignOut</button>
  ) : (
    <div>
      <NavLink to="/signin" className="style-header-btns">
        <button>SignIn</button>
      </NavLink>
      <NavLink to="/signup" className="style-header-btns">
        <button>SignUp</button>
      </NavLink>
    </div>
  );

  return (
    <header>
      <NavLink to="/">
        <h1>Movie Tracker</h1>
      </NavLink>
      <div className="btn-container">
        <p className="welcome">{welcomeBanner}</p>
        {btns}
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  login: state.login,
  signOutUser: state.login

});

const mapDispatchToProps = dispatch => ({
  signOutUser: user => dispatch(signOutUser(user.data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
