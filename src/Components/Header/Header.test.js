import React from 'react';
import {shallow, mount} from 'enzyme';
import {Header} from './Header';
import {BrowserRouter as Router} from 'react-router-dom'

// 62, 100, 28,69

// line 13,14,19,55

describe('Header', () => {
  let wrapper, login, signOutUser;
  let event = {
    preventDefault: jest.fn()
  }

  beforeEach(() => {
    login = { loggedIn: false }
    signOutUser = jest.fn()
    wrapper = shallow(
      <Header login={login} signOutUser={signOutUser}/>
    );
  })

  it('should match snapshot logged out', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot logged in', () => {
    let login = {
      loggedIn: true
    }
    let wrapper = shallow(
      <Header login={login} signOutUser={signOutUser}/>
    );
    expect(wrapper).toMatchSnapshot()
  })

  xit('should be called with an event', () => {
    let props = {
      login: {
        loggedIn: true,
        name: 'Nathan'
      },
      signOutUser: jest.fn()
    }
    let wrapper = mount(
      <Router>
        <Header {...props}/>
      </Router>
    )
    // wrapper.setProps({
    //   login: {
    //     loggedIn: true,
    //     name: 'Nathan'
    //   }
    // })
    wrapper.signout = jest.fn();
    console.log(wrapper.props())
    expect(wrapper.signOut(event))
      .toHaveBeenCalledWith(event)
  })

})