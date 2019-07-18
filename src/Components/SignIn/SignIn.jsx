import React, {Component} from 'react';
import { allUsers } from "../../apiCalls/apiCalls";
import { grabUsers } from '../../actions';
import { connect }  from 'react-redux';
import "./SignIn.scss";

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

  // checkAllUsers = (event) => {
  //   event.preventDefault();
  //   this.props.users.find(user => {
  //     console.log(user.id)
  //     if (user.email !== this.state.email){
  //       this.setState({loginMessage: 'Email not in system. Please add new account'})
  //     } else if (user.email === this.state.email && user.password !== this.state.password) {
  //       this.setState({loginMessage:'Password is incorrect, please try again'}) 
  //     } else if (user.email === this.state.email && user.password === this.state.password) {
  //       this.setState({ loggedInUser: user.id, loginMessage: 'This actually works'})
  //     }
  //     return this.state;
  //   })
  //   console.log(this.state)
  //   this.resetInputs()
  // }

  resetInputs = () => {
    this.setState({ email: '', password: ''})
  }

  render(){
    return (
      <main>
        <form>
          {/* Name:<input /> */}
          Email: <input 
            name='email'
            value={this.state.email}
            onChange={event => this.handleChange(event)}/>
          Password: <input 
            name='password'
            value={this.state.password}
            onChange={event => this.handleChange(event)}/>
          <button onClick={event => this.handleLogin(event)}>Sign In</button>
          <h2>{this.state.loginMessage}</h2>
        </form>
      </main>
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