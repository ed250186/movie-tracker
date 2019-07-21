import React, {Component} from 'react';
import { connect }  from 'react-redux';
import "../SignUp/SignUp.scss";
import { NavLink } from "react-router-dom";
import exit from '../../images/cancel.png'
import { signInUser, signOutUser } from "../../actions/userActions";
import { fetchUserSignIn } from "../../apiCalls/apiCalls.js";
import "../SignUp/SignUp.scss";


class SignIn extends Component {
  constructor(props) {
    super(props);
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
    this.props.history.push("/")
    this.resetInputs();
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  resetInputs = () => {
    this.setState({ email: "", password: "" });
  };

  // signOut = (event) => {
  //   event.preventDefault();
  //   this.props.signOutUser(signOutUser)
  // }

  render() {
    return (
      <div className='sign-in'>
        <NavLink to='/' className='exit'>
        </NavLink>
        <form onSubmit={this.handleLogin}>
          <NavLink to='/'>
            <img src={exit} alt="exit sign-in button" className='exit-button'/>
          </NavLink>
          <div>
          <input 
            name='email'
            value={this.state.email}
            placeholder='Email'
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
          {/* <h2>{this.state.loginMessage}</h2> */}
          <p>Create new account here</p>
        {/* </form> */}
        {/* <form> */}
        </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  signInUser: state.signInUser
  // signOutUser: state.signOutUser
});

const mapDispatchToProps = dispatch => ({
  signInUser: user => dispatch(signInUser(user.data))
  // signOutUser: user => dispatch(signOutUser(user.data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
