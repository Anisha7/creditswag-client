import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";

import LoginScreen from "../screens/Login";
import SignupScreen from "../screens/Signup";

import HomeNavigation from "./home";
import SettingsNavigation from "./settings";

// Authentication tabs
const AuthNavigation = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen }
  },
  {
    initialRouteName: "Login",
    headerMode: "screen",
  }
);

const TabBarComponent = props => <BottomTabBar {...props} />;
// Tabs: Settings, Home, Wallet, Goals
const AppNavigation = createBottomTabNavigator(
  {
    Settings: SettingsNavigation,
    Home: HomeNavigation
  },
  {
    initialRouteName: "Settings",
    headerMode: "screen",
    tabBarComponent: props => (
      <TabBarComponent
        {...props}
        style={{ backgroundColor: "#31323F"}}
      />
    ),
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: '#A55FD0',
      inactiveTintColor: '#8F8E98'
    },
    
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation
  },
  {
    initialRouteName: "Auth",
    headerMode: "screen",
  },
);

export default createAppContainer(SwitchNavigator);
