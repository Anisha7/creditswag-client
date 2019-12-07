import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from '../screens/Settings';

// Settings tabs
export default createStackNavigator(
    {
      Settings: { screen: SettingsScreen },
      // Profile: { screen: ProfileScreen },
      // ChangeEmail: { screen: ChangeEmailScreen },
      // PaymentSearch: { screen: PaymentSearchScreen },
      // RecurringBill: { screen: RecurringBillScreen }
    },
    {
      initialRouteName: 'Settings',
      headerMode: 'none'
    }
  )