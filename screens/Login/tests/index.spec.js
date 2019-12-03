import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'


import LoginScreen from '../';
import {
    Text,
    TextInput,
    TouchableWithoutFeedback,
    TouchableHighlight,
    View
  } from "react-native";


describe('<LoginScreen />', () => {
    it('has style and children props', () => {
      const Wrapper = shallow(
          <LoginScreen />);
      const props = Wrapper.props()
      expect(Object.keys(props)).toStrictEqual([ 'style', 'children' ])
      expect(props.style).toBeDefined()
      expect(props.children).toBeDefined()
    });
  
    it('renders', () => {
      const Wrapper = shallow(
          <LoginScreen />);
      expect(Wrapper.find(TextInput)).toHaveLength(2);
      expect(Wrapper.find(TouchableWithoutFeedback)).toHaveLength(2);
      expect(Wrapper.find(TouchableHighlight)).toHaveLength(4);
      expect(Wrapper.find(Text)).toHaveLength(4);
      expect(Wrapper.find(View)).toHaveLength(5);
    });

    it('logs in user with credit swag account', () => {
        // TODO
        expect(true).toBe(true);
    })

    it('redirects to reset password when prompted', () => {
        // TODO: reset password button clicked
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