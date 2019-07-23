import React from 'react';
import {shallow, mount} from 'enzyme';
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

  it('should reset state', () => {
    wrapper.setState({email: 'hi', password: 'hi'})
    expect(wrapper.state('email')).toEqual('hi')
    expect(wrapper.state('password')).toEqual('hi')
    wrapper.instance().resetInputs()
    expect(wrapper.state('email')).toEqual('')
    expect(wrapper.state('password')).toEqual('')
  })

})