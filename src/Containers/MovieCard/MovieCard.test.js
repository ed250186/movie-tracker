import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from './MovieCard';


//28.57 |    27.27 |     12.5 |       30

//lines   ... 44,161,162,163
describe('App', () => {
  let wrapper, instance, mockFunc;
  let props = {
    login: {
      id: 1,
      loggedIn: true
    },
    favorites: []
  }
  let event = {
    preventDefault: jest.fn()
  }
  beforeEach(() => {
    mockFunc = jest.fn()
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

  it('should call getFavoriteMovies', async () => {
    wrapper.setProps({getFavoriteMovies: mockFunc})
    expect(mockFunc).not.toHaveBeenCalled()
    await instance.toggleFavorite(event, 1)
    expect(mockFunc).toHaveBeenCalled()
  })

  it('should call deleteFavoriteMovie', async () => {
    wrapper.setProps({deleteFavoriteMovie: mockFunc})
    expect(mockFunc).not.toHaveBeenCalled()
    await instance.deleteFavoriteMovie()
    expect(mockFunc).toHaveBeenCalled()
  })

  it('should set movieView state', () => {
    expect(wrapper.state('movieInfo')).toEqual(false)
    instance.toggleView(true)
    expect(wrapper.state('movieInfo')).toEqual(true)
  })

})