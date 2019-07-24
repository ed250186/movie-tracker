import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from './MovieCard';


//28.57 |    27.27 |     12.5 |       30

//lines   ... 44,161,162,163
describe('App', () => {
  let wrapper, instance
  let mockFunc = jest.fn()
  let props = {
    login: {
      id: 1,
      loggedIn: true
    }
  }
  let event = {
    preventDefault: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<MovieCard {...props}/>);
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('addFavorites should call addFavoriteMovie', () => {
    wrapper.setProps({addFavoriteMovie : mockFunc})
    instance.addFavorites()
    expect(mockFunc).toHaveBeenCalled()
  })

  it('should set error state', () => {
    wrapper.setProps({login: {id:1, loggedIn: false}})
    expect(wrapper.state('error')).toEqual('')
    instance.toggleFavorite(event, 1)
    expect(wrapper.state('error')).toEqual("Please login to be able to favorite a movie")
  })

  it('should call getFavoriteMovies', () => {
    wrapper.setProps({getFavoriteMovies: mockFunc})
    instance.toggleFavorite(event, 1)
    expect(mockFunc).toHaveBeenCalled()
  })

})