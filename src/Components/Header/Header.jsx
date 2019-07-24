import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOutUser } from "../../actions/index";
import "./Header.scss";

export class Header extends Component {
  
  welcomeBanner = () => ( this.props.login.loggedIn
    ? `Welcome back, ${this.props.login.name}!`
    : "")

  signOut = (event) => {
    event.preventDefault();
    this.props.signOutUser(signOutUser)
  }

  btns = () => {
    if(this.props.login.loggedIn) {return (
    <button onClick={event => this.signOut(event)}
      className='signOut'
    >
      SignOut
    </button>
  )} else { return (
    <div>
      <NavLink to="/signin" className="style-header-btns">
        <button>SignIn</button>
      </NavLink>
      <NavLink to="/signup" className="style-header-btns">
        <button>SignUp</button>
      </NavLink>
    </div>
  )}
  }
  render() {
  return (
    <header>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <h1>Movie Tracker</h1>
      </NavLink>
      <div className="btn-container">
        <p className="welcome">{this.welcomeBanner()}</p>
        {this.btns()}
      </div>
    </header>
  );
  }
};

const mapStateToProps = state => ({
  login: state.login,
  signOutUser: state.login

});

const mapDispatchToProps = dispatch => ({
  signOutUser: user => dispatch(signOutUser(user.data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
