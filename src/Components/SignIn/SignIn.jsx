import React, {Component} from 'react';
import { connect }  from 'react-redux';
import "../SignUp/SignUp.scss";
import { signInUser } from "../../actions/userActions";
import { fetchUserSignIn } from "../../apiCalls/apiCalls.js";
import { NavLink } from "react-router-dom";


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
          <NavLink to='/'>
            <img src="" alt="exit sign-in button"/>
          </NavLink>
          <div>
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
          </div>
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
