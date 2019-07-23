import React from 'react';
import {shallow} from 'enzyme';
import {SignIn} from './SignIn';

//54, 25, 60, 59

//lines ... 25,26,28,30,90

describe('SignIn', () => {
  let wrapper
  let mockEvent = { 
    preventDefault: jest.fn(),
    target: {
    name: 'email',
    value: 'nathan.froeh@gmail.com'
  }}
  beforeEach(() => {
    wrapper = shallow(<SignIn />);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should reset email and password state', () => {
    wrapper.setState({email: 'hi', password: 'hi'})
    expect(wrapper.state('email')).toEqual('hi')
    expect(wrapper.state('password')).toEqual('hi')
    wrapper.instance().resetInputs()
    expect(wrapper.state('email')).toEqual('')
    expect(wrapper.state('password')).toEqual('')
  })

  it('should be called on email change', () => {
    wrapper.instance().handleChange = jest.fn()
    wrapper.find('.email').simulate('change')
    expect(wrapper.instance().handleChange).toHaveBeenCalled()
  })

  it('should be called password change', () => {
    wrapper.instance().handleChange = jest.fn()
    wrapper.find('.password').simulate('change')
    expect(wrapper.instance().handleChange).toHaveBeenCalled()
  })

  it('should set state', () => {
    expect(wrapper.state('email')).toEqual('')
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('email')).toEqual('nathan.froeh@gmail.com')
  })

  



})