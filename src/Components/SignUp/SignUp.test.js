import React from 'react';
import {shallow} from 'enzyme';
import {SignUp} from './SignUp';

//52.17 |       50 |    55.56 |    57.14
//... 32,33,35,37,99


describe('SignUp', () => {
  let wrapper, props
  let mockEvent = { 
    preventDefault: jest.fn(),
    target: {
    name: 'email',
    value: 'nathan.froeh@gmail.com',
    password: 'Batman'
  }}
  beforeEach(() => {
    props = {
      addUsers: jest.fn(),
      history: []
    }
    wrapper = shallow(<SignUp {...props}/>);
  })

  it('should match snapshot', () => {
    wrapper.setState({userExistsMessage: ''})
    expect(wrapper).toMatchSnapshot()
  })

  it('should render message', () => {
    wrapper.setState({userExistsMessage: 'user'})
    expect(wrapper).toMatchSnapshot()
  })

  it('should set state', () => {
    expect(wrapper.state('email')).toEqual('')
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('email')).toEqual('nathan.froeh@gmail.com')
  })

  it('should reset inputs', () => {
    wrapper.setState({
      name: '1', email: '1', password: '1'})
    expect(wrapper.state('name')).toEqual('1')
    expect(wrapper.state('email')).toEqual('1')
    expect(wrapper.state('password')).toEqual('1')
    wrapper.instance().resetInputs()
    expect(wrapper.state('name')).toEqual('')
    expect(wrapper.state('email')).toEqual('')
    expect(wrapper.state('password')).toEqual('')
  })

  it('should call handleSignUp on click', () => {
    wrapper.instance().handleSignUp = jest.fn()
    wrapper.find('.button').simulate('click')
    expect(wrapper.instance().handleSignUp).toHaveBeenCalled()
  })

  it('should set userExistsMessage', async () => {
    wrapper.instance().getUser = jest.fn(() => ({error: 'stuff'}))
    expect(wrapper.state('userExistsMessage')).toEqual("")
    await wrapper.instance().handleSignUp(mockEvent)
    expect(wrapper.state('userExistsMessage'))
      .toEqual('Email address already exists in the system. Please log in.')
  })


})