import React, {Component} from 'react';
import { grabUsers } from '../../actions';
import { connect }  from 'react-redux';
import "../SignUp/SignUp.scss";

class SignIn extends Component{
  constructor() {
    super();
    this.state = {
      loggedInUser: null,
      email: '',
      password: '',
    }
  }
  
  handleLogin = (event) => {
    event.preventDefault();
    console.log(this.state)
      const url = 'http://localhost:3000/api/users';
      const user = {email: this.state.email, password: this.state.password};

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name] : event.target.value })
  }

  resetInputs = () => {
    this.setState({ email: '', password: ''})
  }

  render(){
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

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  grabUsers: (users) => dispatch(grabUsers(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)