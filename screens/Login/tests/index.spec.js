import expect from 'expect'
import React from 'react'
import { mount } from 'enzyme'


import LoginScreen from '../';
import {
    TextInput
  } from "react-native";


describe('<LoginScreen />', () => {
    it('has no props', () => {
      const Wrapper = mount(
          <LoginScreen />);
      expect(Wrapper.props()).toEqual({});
    });
  
    it('renders', () => {
      const Wrapper = mount(
          <LoginScreen />);
      expect(Wrapper.find(TextInput)).toHaveLength(2);
    });
    
  });