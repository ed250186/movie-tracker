import React, {Component} from 'react'

class SignUp extends Component {
  constructor() {
    super() 
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  url = 'http://localhost:3000/api/users/new'
  // const post = 

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }
  return() {
    return (
      <div>
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
          <input type="submit" name="" id=""/>
        </form>
      </div>
    )
  }
}

export default SignUp


