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
  return() {
    return (
      <div>

      </div>
    )
  }
}

export default SignUp


