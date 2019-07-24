import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from './MovieCard';


//28.57 |    27.27 |     12.5 |       30

//lines   ... 44,161,162,163
describe('App', () => {
  let wrapper
  let mockFunc = jest.fn()
  let props = {
    login: {
      id: 1
    }
  }
  beforeEach(() => {
    wrapper = shallow(<MovieCard {...props}/>);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('addFavorites should call addFavoriteMovie', () => {
    wrapper.setProps({addFavoriteMovie : mockFunc})
    wrapper.instance().addFavorites()
    console.log(wrapper.props)
    expect(mockFunc).toHaveBeenCalled()
  })

})