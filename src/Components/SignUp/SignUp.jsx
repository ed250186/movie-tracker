
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './SignUp.scss';
import exit from '../../images/cancel.png'
import React, {Component} from 'react';
import PropTypes from "prop-types";
import './SignUp.scss';
import { createUser } from '../../apiCalls/apiCalls.js';
import { addUsers } from '../../actions/index';


export class SignUp extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      name: '',
      email: '',
      password: '',
      userExistsMessage: '',
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  getUser = (name, email, password) => {
    return createUser(name, email, password);
  }

  handleSignUp = async event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    let addUsers = await this.getUser(name, email, password);
    if (!addUsers.error) {
      console.log('yes')
      this.props.addUsers(addUsers)
      this.props.history.push("/")
    } else {
      console.log('no')
      this.setState({userExistsMessage: 'Email address already exists in the system. Please log in.'})
    }
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({name: '', email: '', password: ''});
  };

  render() {
    return (
      <div className='sign-up'>
        <NavLink to='/' className='exit'>
        </NavLink>
        <form onSubmit={this.checkUsers}>
        <NavLink to='/'>
            <img src={exit} alt="exit sign-in button" className='exit-button'/>
          </NavLink>
          <div>
          <input 
            type="text" 
            value={this.state.name}
            placeholder='name' 
            name='name'
            onChange={this.handleChange}
          />
          <input 
            type="text" 
            value={this.state.email}
            placeholder='email' 
            name='email'
            onChange={this.handleChange}
          />
          <input 
            type="password" 
            value={this.state.password}
            placeholder='password' 
            name='password'
            onChange={this.handleChange}
          />
          <input 
            type="submit" 
            name="submit" 
            value='Submit'
            className='button'
            onClick ={event => this.handleSignUp(event)}
            />
            {this.state.userExistsMessage === ''  ? (
              <p></p>
            ) : (
              <p>{this.state.userExistsMessage}</p>
            )}
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.grabUsers,
})

const mapDispatchToProps = (dispatch) => ({
  addUsers: (users) => dispatch(addUsers(users))
})

SignUp.propTypes = {
  users: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)


