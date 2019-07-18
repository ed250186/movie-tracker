import React, {Component} from 'react';
// import { grabUsers } from '../../actions';
import { connect }  from 'react-redux';
import "../SignUp/SignUp.scss";
// import React, { Component } from "react";
import { signInUser } from "../../actions/userActions";
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
    this.props.signInUser(signInUser.data);
    this.resetInputs();
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  resetInputs = () => {
    this.setState({ email: "", password: "" });
  };

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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  signInUser: state.signInUser
});

const mapDispatchToProps = dispatch => ({
  signInUser: user => dispatch(signInUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
