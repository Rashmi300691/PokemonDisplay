import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React, { Component } from 'react';
import Pokemon from './Pokemon';

configure({adapter: new Adapter()});
 
describe('<Pokemon/>',()=>
{
   it('should have one button', ()=>
   {
        const wrapper=shallow(<Pokemon/>);
        expect(wrapper.find('button')).toHaveLength(1);
      
   });

});