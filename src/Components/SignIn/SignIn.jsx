import React, {Component} from 'react';
// import { grabUsers } from '../../actions';
import { connect }  from 'react-redux';
import "../SignUp/SignUp.scss";
// import React, { Component } from "react";
import { signInUser, signOutUser } from "../../actions/userActions";
import { fetchUserSignIn } from "../../apiCalls/apiCalls.js";
// import { connect } from "react-redux";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    let signInUser = await fetchUserSignIn(email, password);
    this.props.signInUser(signInUser);
    this.resetInputs();
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  resetInputs = () => {
    this.setState({ email: "", password: "" });
  };

  signOut = (event) => {
    event.preventDefault();
    this.props.signOutUser(signOutUser)
  }

  render() {
    return (
      <div className='sign-in'>
        <form onSubmit={this.handleLogin}>
          <input 
            name='email'
            value={this.state.email}
            placeholder='Name'
            onChange={event => this.handleChange(event)}
          />
          <input 
            type='password'
            name='password'
            value={this.state.password}
            placeholder='Password'
            onChange={event => this.handleChange(event)}
          />
          <input 
            type="submit" 
            value='Sign In' 
            className='button'
          />
          <h2>{this.state.loginMessage}</h2>
        </form>
        <form>
          <button onClick={event => this.signOut(event)}>SignOut</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  signInUser: state.signInUser,
  signOutUser: state.signOutUser
});

const mapDispatchToProps = dispatch => ({
  signInUser: user => dispatch(signInUser(user.data)),
  signOutUser: user => dispatch(signOutUser(user.data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
