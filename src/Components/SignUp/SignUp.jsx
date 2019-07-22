
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './SignUp.scss';
import exit from '../../images/cancel.png'
import React, {Component} from 'react';
import './SignUp.scss';
import {createUser, allUsers} from '../../apiCalls/apiCalls.js';
import { grabUsers, addUsers } from '../../actions/userActions';

class SignUp extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      name: '',
      email: '',
      password: '',
      userExistsMessage: '',
      error: ''
    }
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    return allUsers()
    .then(users => this.props.grabUsers(users))
    .catch(this.setState({ error: 'Error fetching data' }));
  }

  url = () => ('http://localhost:3000/api/users/new');
  newUser = () => ({
    name: this.state.name, 
    email: this.state.email,
    password: this.state.password
  })

  post = () =>  ({
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.newUser())
  })

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  checkUsers = async (e) => {
    e.preventDefault()
    await this.getAllUsers()
    const copies = this.props.users.filter(user => user.email === this.state.email)
    copies.length === 0 ? this.addUser() : this.setState({userExistsMessage: 'User Already Exists'})
    // this.resetInputs();
  }

  addUser = () => {
    createUser(this.url(), this.post())
    this.props.history.push("/")
  }

  resetInputs = () => {
    console.log('hiiiiiiiii')
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
            onClick ={this.resetInputs}
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
  users: state.grabUsers
})

const mapDispatchToProps = (dispatch) => ({
  addUsers: (users) => dispatch(addUsers(users)),
  grabUsers: (users) => dispatch(grabUsers(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)


