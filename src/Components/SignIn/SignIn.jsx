import React, {Component} from 'react';
import { connect }  from 'react-redux';
import "../SignUp/SignUp.scss";
import { NavLink } from "react-router-dom";
import exit from '../../images/cancel.png'
import { signInUser } from "../../actions/userActions";
import { fetchUserSignIn } from "../../apiCalls/apiCalls.js";
import "../SignUp/SignUp.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ''
    };
  }

  handleLogin = async event => {
    event.preventDefault();
    const { email, password } = this.state;
      let signInUser = await fetchUserSignIn(email, password);
      if (signInUser){
        this.props.signInUser(signInUser)
        this.props.history.push("/")
      }else {
        this.setState({error: "Incorrect Username or Password"})
      }
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
          {this.state.error === ''  ? (
          <p></p>
        ) : (
          <p>{this.state.error}</p>
        )}
        </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  signInUser: user => dispatch(signInUser(user.data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
