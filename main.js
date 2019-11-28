import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/Login/';
import SignupScreen from './screens/Signup/';

// FUTURE: create Tab navigator for in-app tabs/pages
// https://stackoverflow.com/questions/54210517/react-native-set-homepage-screen-main-activity

const MainNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen }
  })

export default createAppContainer(MainNavigator)