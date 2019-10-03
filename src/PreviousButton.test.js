import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Prev from './PreviousButton';

configure({adapter: new Adapter()});
 
describe('<Prev/>',()=>
{
   it('should have one button', ()=>
   {
        const wrapper=shallow(<Prev/>);
        expect(wrapper.find('button')).toHaveLength(1);
      
   });

});