import React, {Component} from 'react';
import './SignUp.scss';
import {createUser, allUsers} from '../../apiCalls/apiCalls.js';
import {connect} from 'react-redux';
import { grabUsers } from '../../actions';


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
    console.log(allUsers())
    allUsers()
    .then(users => this.props.grabUsers(users))
    .catch(this.setState({ error: 'Error fetching data' }));
  }

  url = () => 'http://localhost:3000/api/users/new'
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

  checkUsers = (e) => {
    e.preventDefault()
    console.log(this.props.users)
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
          <input type="submit" name="submit" value='Submit'/>
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


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)


