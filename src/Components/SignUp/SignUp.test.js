import React from 'react';
import {shallow} from 'enzyme';
import {SignUp} from './SignUp';

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SignUp />);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})