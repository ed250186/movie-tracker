import React from 'react';
import {shallow} from 'enzyme';
import {Favorites} from './Favorites';
import MovieCard from "../MovieCard/MovieCard.jsx";

describe('Favorites', () => {
  let wrapper, props, instance
  beforeEach(() => {
    props = {
      favorites:[],
      movies: []
    }
    wrapper = shallow(<Favorites {...props}/>)
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot', () => {
    wrapper.setProps({displayFavMovies: true})
    expect(wrapper).toMatchSnapshot()
  })

  it('should return a matching movieCard', () => {
    let movies = [{id:1, title:'Batman'}]
    let expected = ([<MovieCard 
      {...movies[0]} 
      key={1} 
      title={'Batman'} 
    />])
    expect(instance.displayFavoriteMovies(movies)).toEqual(expected)
  })

  it('should return favorite movies', () => {
    let movies = [{id:1, title:'Batman'}]
    let expected = ([<MovieCard 
      {...movies[0]} 
      key={1} 
      title={'Batman'} 
    />])
    wrapper.setProps({favorites: movies, movies: movies})
    expect(instance.findFaves()).toEqual(expected)
  })

})