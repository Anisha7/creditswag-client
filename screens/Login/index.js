import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F303F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
      display: 'flex',
      flexDirection: 'row',
      fontSize: 24,
  },
//   form: {
//       colo
//   }
});

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <Button title="Log in"
                            disabled
                            onPress={() => Alert.alert('Cannot press this one')}
                            color="#FFFFF"
                    />
                    <Button title="Sign up"
                            onPress={() => Alert.alert('Press this one')}
                            color="#6C6D77"
                    />
                </View>
                {/* <View style={styles.form}>

                </View> */}
                <Text>Open up App.js to start working on your app!</Text>
            </View>
          );
    }
}
