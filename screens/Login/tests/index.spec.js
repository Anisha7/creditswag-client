import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
configure({adapter: new Adapter()});
import LoginScreen from '../';
import {
    TextInput
  } from "react-native";

describe('<LandingPage />', () => {
    it('has no props', () => {
      const wrapper = mount(
          <LoginScreen />);
      expect(wrapper.props()).toEqual({});
    });
  
    it('renders', () => {
      const wrapper = mount(
          <LandingPage />);
      expect(wrapper.find(TextInput)).toHaveLength(2);
    });
  
  });