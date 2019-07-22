import React from 'react';
import {shallow} from 'enzyme';
import {SignIn} from './SignIn';

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SignIn />);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})