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

})