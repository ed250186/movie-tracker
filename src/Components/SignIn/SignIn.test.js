import React from 'react';
import {shallow} from 'enzyme';
import {SignIn} from './SignIn';

//82.14 |       75 |    63.64 |    88.46 |

//lines 21,34,98 

describe('SignIn', () => {
  let wrapper, props
  let mockEvent = { 
    preventDefault: jest.fn(),
    target: {
    name: 'email',
    value: 'nathan.froeh@gmail.com'
  }}
  beforeEach(() => {
    props = {
      signInUser: jest.fn(),
      history: []
    }
    wrapper = shallow(<SignIn {...props}/>);
  })

  it('should match snapshot', () => {
    wrapper.setState({error: ''})
    expect(wrapper).toMatchSnapshot()
  })

  it('should render error', () => {
    wrapper.setState({error: 'Error'})
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

  xit('should call signInUser', () => {
    wrapper.instance().getUser = jest.fn(() => 'Nathan')
    wrapper.setState({email: '1', password: '2'})
    wrapper.instance().handleLogin(mockEvent)
    expect(props.signInUser).toHaveBeenCalled()
  })

  it('should call resetInputs', () => {
    wrapper.instance().getUser = jest.fn(() => 'Nathan')
    wrapper.setState({email: '1', password: '2'})
    wrapper.instance().resetInputs = wrapper.setState({
      email: '',
      password: ''
    })
    wrapper.instance().handleLogin(mockEvent)
    expect(wrapper.state('email')).toEqual('')
  })



})