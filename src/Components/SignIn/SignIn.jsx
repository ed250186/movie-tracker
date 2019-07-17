import React, {Component} from 'react';
import { allUsers } from "../../apiCalls/apiCalls";
import { grabUsers } from '../../actions';
import { connect }  from 'react-redux';
import "./SignIn.scss";

class SignIn extends Component{
  componentDidMount() {
    allUsers()
    .then(users => this.props.grabUsers(users))
    .catch(this.setState({ error: 'Error fetching data' }));
  }
  render(){
    return (
      <main>
        <form>
          Name:<input />
          Email: <input />
          Password: <input />
          <button>Sign In</button>
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