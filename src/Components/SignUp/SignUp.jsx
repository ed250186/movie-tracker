import React, {Component} from 'react';
import './SignUp.scss';
import {createUser, allUsers} from '../../apiCalls/apiCalls.js';
import {connect} from 'react-redux';
import { grabUsers, addUsers } from '../../actions/userActions';

class SignUp extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    return allUsers()
    .then(users => this.props.addUsers(users))
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
    console.log(this.props)
    const copys = this.props.users.filter(user => user.email === this.state.email)
    copys.length === 0 ? this.addUser() : console.log('User Exsists')
  }

  addUser = () => {
    createUser(this.url(), this.post())
  }

  render() {
    return (
      <div className='sign-up'>
        <form onSubmit={this.checkUsers}>
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
          <input 
            type="submit" 
            name="submit" 
            value='Submit'
            className='button'
            />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.grabUsers
})

const mapDispatchToProps = (dispatch) => ({
  addUsers: (users) => dispatch(addUsers(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)


