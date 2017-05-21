import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('App renders a loading screen when waiting for links', () => {
  const wrapper = shallow(<App />)

  console.log(wrapper.find('.loading').type())
  expect(wrapper.find('.loading').type()).to.toEqual('h1')
})

it('App has a container for links', () => {
  const wrapper = shallow(<App />)

  console.log(wrapper.find('.container h2').text())  
  expect(wrapper.find('.container h2').text()).to.toEqual('Links!')
})
