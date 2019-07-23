import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App/>);
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render people home page', () => {
    expect(instance.main()).toMatchSnapshot()
  })


})