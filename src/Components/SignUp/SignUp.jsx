import React, {Component} from 'react';
import "./SignUp.scss";

class SignUp extends Component{
  
  render(){
    return (
      <main>
        <form>
          <span>Name:</span> <input />
          <span>Email:</span> <input />
          <span>Password:</span> <input />
          <span>Confirm password:</span> <input />
        <button className="signUpBtn">Submit</button>
        </form>
      </main>
    )
  }
}

export default SignUp;