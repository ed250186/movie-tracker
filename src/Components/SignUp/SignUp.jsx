import React, {Component} from 'react';
import './SignUp.scss';

class SignUp extends Component {
  constructor() {
    super() 
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  url = () => 'http://localhost:3000/api/users/new'
  newUser = () => ({
    name: this.state.name, 
    email: this.state.email,
    password: this.state.password
  })
  post = () =>  ({
    method: 'POST',
    headers: {'Content Type': 'application/json'},
    body: this.newUser
  })

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }
  render() {
    return (
      <div className='sign-up'>
        <form action="">
          <input 
            type="text" 
            placeholder='name' 
            name='name'
            onChange={this.handleChange}
          />
          <input 
            type="text" 
            placeholder='email' 
            name='email'
            onChange={this.handleChange}
          />
          <input 
            type="text" 
            placeholder='password' 
            name='password'
            onChange={this.handleChange}
          />
          <input type="submit" name="submit" value='Submit'/>
        </form>
      </div>
    )
  }
}

export default SignUp


