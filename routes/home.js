import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home';
import Icon from "react-native-vector-icons/FontAwesome";

// Settings tabs
const HomeNavigation = createStackNavigator(
    {
      Home: { screen: HomeScreen },
    },
    {
      initialRouteName: 'Home',
      // headerMode: 'screen',
    }
  )

export default {
    screen: HomeNavigation,
    navigationOptions: {
      tabBarIcon: ({ tintColor}) => {
        return <Icon name="home" size={30} color={tintColor} />;
      }
    }
  }