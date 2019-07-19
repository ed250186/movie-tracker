import React, { Component } from "react";
import { signInUser } from "../../actions/userActions";
import { fetchUserSignIn } from "../../apiCalls/apiCalls.js";
import { connect } from "react-redux";
import "./SignIn.scss";
import { moviesReducer } from '../../reducers/moviesReducer'

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
    console.log('test', moviesReducer)
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
      <main>
        <form>
          Email:{" "}
          <input
            name="email"
            value={this.state.email}
            onChange={event => this.handleChange(event)}
          />
          Password:{" "}
          <input
            name="password"
            value={this.state.password}
            onChange={event => this.handleChange(event)}
          />
          <button onClick={event => this.handleLogin(event)}>Sign In</button>
          <h2>{this.state.loginMessage}</h2>
        </form>
      </main>
    );
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
