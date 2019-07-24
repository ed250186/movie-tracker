import React from 'react';
import {shallow} from 'enzyme';
import Aside from './Aside';

//88.89 |       50 |      100 |    88.89

describe('App', () => {
  let wrapper;
  let event = {
    preventDefault: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<Aside/>);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should set error state', async () => {
    wrapper.fetchFavoriteMovies = jest.fn(() => false)
    await wrapper.instance().handleFavorites(event)
    expect(wrapper.state('error')).toEqual("No favorited movies")
  })

})