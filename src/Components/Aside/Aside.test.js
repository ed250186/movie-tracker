import React from 'react';
import {shallow} from 'enzyme';
import Aside from './Aside';

describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Aside/>);
    instance = wrapper.instance();
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})