import React from 'react';
import {shallow} from 'enzyme';
import {root} from './index';


describe('src index', () => {

  xit('should match snapshot', () => {
    let wrapper = shallow(<root/>)
    expect(wrapper).toMatchSnapshot()
  })

})