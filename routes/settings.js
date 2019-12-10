import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from '../screens/Settings';
import Icon from "react-native-vector-icons/FontAwesome";

// Settings tabs
const SettingsNavigation = createStackNavigator(
    {
      Settings: { screen: SettingsScreen },
      // Profile: { screen: ProfileScreen },
      // ChangeEmail: { screen: ChangeEmailScreen },
      // PaymentSearch: { screen: PaymentSearchScreen },
      // RecurringBill: { screen: RecurringBillScreen }
    },
    {
      initialRouteName: 'Settings',
      headerMode: 'screen'
    }
  )

export default {
    screen: SettingsNavigation,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <Icon name="cogs" size={30} color={tintColor}/>;
      }
    },
    tabBarOptions: {
      showLabel: false
    }
  }