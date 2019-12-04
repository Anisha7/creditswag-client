import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'


import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


import SignupScreen from '../';
import {
    Text,
    TextInput,
    TouchableWithoutFeedback,
    TouchableHighlight,
    View
  } from "react-native";


describe('<SignupScreen />', () => {
    it('has style and children props', () => {
      const Wrapper = shallow(
          <SignupScreen />);
      const props = Wrapper.props()
      expect(Object.keys(props)).toStrictEqual([ 'style', 'children' ])
      expect(props.style).toBeDefined()
      expect(props.children).toBeDefined()
    });
  
    it('renders', () => {
      const Wrapper = shallow(
          <SignupScreen />);
      expect(Wrapper.find(TextInput)).toHaveLength(4);
      expect(Wrapper.find(TouchableWithoutFeedback)).toHaveLength(2);
      expect(Wrapper.find(TouchableHighlight)).toHaveLength(1);
      expect(Wrapper.find(Text)).toHaveLength(3);
      expect(Wrapper.find(View)).toHaveLength(3);
    });

    it('signs up user with credit swag account', () => {
        // TODO
        expect(true).toBe(true);
    })

    it('prompts user to login if email is already in the system', () => {
        // TODO
        expect(true).toBe(true);
    })

    it('logs in user with google', () => {
        // TODO
        expect(true).toBe(true);
    })

    it('logs in user with facebook', () => {
        // TODO
        expect(true).toBe(true);
    })
    
  });