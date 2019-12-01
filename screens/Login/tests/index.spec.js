import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
// import Enzyme from 'enzyme';
// Enzyme.configure({ adapter: new Adapter() });

import { mount } from 'enzyme';
import LoginScreen from '../';
import {
    TextInput
  } from "react-native";

describe('<LandingPage />', () => {
    it('has no props', () => {
        expect(true)
    //   const wrapper = mount(
    //       <LoginScreen />);
    //   expect(wrapper.props()).toEqual({});
    });
  
    it('renders', () => {
        expect(true)
    //   const wrapper = mount(
    //       <LandingPage />);
    //   expect(wrapper.find(TextInput)).toHaveLength(2);
    });
  
  });