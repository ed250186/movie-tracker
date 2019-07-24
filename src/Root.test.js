import React from 'react';
import {shallow} from 'enzyme';
import Root from './Root'

describe('src Root', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Root/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})