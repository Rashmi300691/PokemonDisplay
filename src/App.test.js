import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure } from 'enzyme';
import Pokemon from './Pokemon';
import Next from './NextButton';
import Prev from './PreviousButton';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should have three Pokemon component', ()=>
{
     const wrapper=shallow(<App/>);
     expect(wrapper.find(Pokemon)).toHaveLength(3);
    
});

it('should have one Prev button', ()=>
{
     const wrapper=shallow(<App/>);
     expect(wrapper.find(Prev)).toHaveLength(1);
});

it('should have one Next button', ()=>
{
     const wrapper=shallow(<App/>);
     expect(wrapper.find(Next)).toHaveLength(1);
 });

