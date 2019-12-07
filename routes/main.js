import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

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
    headerMode: "none"
  }
);

const TabBarComponent = props => <BottomTabBar {...props} />;
// Tabs: Settings, Home, Wallet, Goals
const AppNavigation = createBottomTabNavigator(
  {
    Settings: {
      screen: SettingsNavigation,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="cogs" size={30} color={tintColor}/>;
        }
      },
      tabBarOptions: {
        showLabel: false
      }
    },
    Home: {
      screen: HomeNavigation,
      navigationOptions: {
        tabBarIcon: ({ tintColor}) => {
          return <Icon name="home" size={30} color={tintColor} />;
        }
      }
    }
  },
  {
    initialRouteName: "Settings",
    headerMode: "none",
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
    headerMode: "none"
  }
);

export default createAppContainer(SwitchNavigator);
