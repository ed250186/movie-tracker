import React from 'react';
import {shallow} from 'enzyme';
import {Favorites} from './Favorites';


describe('Favorites', () => {
  let wrapper, props
  beforeEach(() => {
    props = {
      favorites:[],
      movies: []
    }
    wrapper = shallow(<Favorites {...props}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })


})