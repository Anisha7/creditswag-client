import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';

import HomeNavigation from './home';
import SettingsNavigation from './settings';

// Authentication tabs
const AuthNavigation = createStackNavigator(
    {
        Login: { screen: LoginScreen },
        Signup: { screen: SignupScreen }
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none'
    }
)

// Tabs: Settings, Home, Wallet, Goals 
const AppNavigation =   createBottomTabNavigator(
    {
      Settings: { screen: SettingsNavigation },
      Home: { screen: HomeNavigation }
    },
    {
      initialRouteName: 'Settings'
    }
)

const SwitchNavigator = createSwitchNavigator(
    {
      Auth: AuthNavigation,
      App: AppNavigation
    },
    {
      initialRouteName: 'Auth'
    }
)
  
export default createAppContainer(SwitchNavigator)