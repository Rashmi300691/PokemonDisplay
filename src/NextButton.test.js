import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Next from './NextButton';

configure({adapter: new Adapter()});
 
describe('<Next/>',()=>
{
   it('should have one button', ()=>
   {
        const wrapper=shallow(<Next/>);
        expect(wrapper.find('button')).toHaveLength(1);
      
   });

});