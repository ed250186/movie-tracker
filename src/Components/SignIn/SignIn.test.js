import React from 'react';
import {shallow} from 'enzyme';
import {SignIn} from './SignIn';

//36, 100, 20, 40

//lines ... 31,35,53,60,83

describe('App', () => {
  let wrapper

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

  it('should be called on click', () => {
    wrapper.instance().handleChange = jest.fn()
    wrapper.find('.email').simulate('change')
    expect(wrapper.instance().handleChange).toHaveBeenCalled()
  })

  it('should set state', () => {
    let mockEvent = { 
      preventDefault: jest.fn(),
      target: {
      name: 'email',
      value: 'nathan.froeh@gmail.com'
    }}
    expect(wrapper.state('email')).toEqual('')
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('email')).toEqual('nathan.froeh@gmail.com')
  })

})