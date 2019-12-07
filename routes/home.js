import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home';

// Settings tabs
export default createStackNavigator(
    {
      Home: { screen: HomeScreen },
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none'
    }
  )