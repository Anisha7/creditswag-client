import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import HomeScreen from './screens/Home';

// FUTURE: create Tab navigator for in-app tabs/pages
// https://stackoverflow.com/questions/54210517/react-native-set-homepage-screen-main-activity

// const MainNavigator = createStackNavigator({
//     Login: { screen: LoginScreen },
//     Signup: { screen: SignupScreen }
//   })


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

const AppNavigation = createStackNavigator(
    {
      Home: { screen: HomeScreen }
    },
    {
      initialRouteName: 'Home'
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