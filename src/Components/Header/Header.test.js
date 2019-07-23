import React from 'react';
import {shallow, mount} from 'enzyme';
import {Header} from './Header';
import {BrowserRouter as Router} from 'react-router-dom'

// 81, 100, 62, 91

// line 58

describe('Header', () => {
  let wrapper, props
  let event = {
    preventDefault: jest.fn()
  }

  beforeEach(() => {
    props = {
      login: {
        loggedIn: true,
        name: 'Nathan'
      },
      signOutUser: jest.fn(),

    }
    wrapper = shallow(
        <Header {...props}/>
    )
  })

  it('should match snapshot logged out', () => {
    wrapper.setProps({
      login: {
        loggedIn: false,
        name: 'Nathan'
      }
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot logged in', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should be called with an event', () => {
    wrapper.instance().signOut = jest.fn()
    wrapper.find('.signOut').simulate('click')
    expect(wrapper.instance().signOut).toHaveBeenCalled()
  })

  it('should be called with an event', () => {
    wrapper.instance().signOut = jest.fn()
    wrapper.find('.signOut').simulate('click')
    expect(wrapper.instance().signOut).toHaveBeenCalled()
  })

  it('should call signOutUser', () => {
    wrapper.instance().signOut(event);
    expect(props.signOutUser).toHaveBeenCalled()
  })

})