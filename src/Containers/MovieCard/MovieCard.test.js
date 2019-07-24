import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from './MovieCard';

<<<<<<< HEAD
describe('MovieCard', () => {
  let wrapper
=======
>>>>>>> 4b56983c6895aa3e106ccbd372906011710b4d63

//83.78 |    72.73 |     62.5 |    88.57 

//lines   83,162,163,164
describe('MovieCard', () => {
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
    wrapper.setState({error: ''})
    expect(wrapper).toMatchSnapshot()
  })

  xit('should render error', () => {
    wrapper.setState({error: 'An Error'})
    expect(wrapper).toMatchSnapshot()
  })

  xit('should render infoCard', () => {
    // wrapper.setState({movieInfo: true})
    expect(instance.infoCard()).toMatchSnapshot()
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

  it('should call toggleFavorite on click', () => {
    instance.toggleFavorite = mockFunc
    wrapper.find('.inactive').simulate('click')
    expect(instance.toggleFavorite).toHaveBeenCalled()
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

  it('should call toggleView on click', () => {
    instance.toggleView = mockFunc
    wrapper.find('.card-img').simulate('click')
    expect(instance.toggleView).toHaveBeenCalled()
  })

  it('backdrop click should call toggleView', () => {
    wrapper.setState({movieInfo: true})
    instance.toggleView = mockFunc
    wrapper.find('.backdrop').simulate('click')
    expect(instance.toggleView).toHaveBeenCalled()
  })

})