import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from './MovieCard';

describe('MovieCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MovieCard/>);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})