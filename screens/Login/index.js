import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F303F',
    justifyContent: 'center',
    paddingTop: 120,
  },
  buttons: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
  },
  button: {
      fontSize: 24,
      color: '#ffffff'
  }
});

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <TouchableWithoutFeedback
                    onPress={() => Alert.alert('Cannot press this one')}
                    >
                        <Text style={{
                                fontSize: 24,
                                color: '#ffffff'
                            }}>Log in</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                    onPress={() => Alert.alert('Press this one')}
                    >
                        <Text style={{
                                fontSize: 24,
                                color: '#6C6D77'
                            }}>Sign up</Text>
                    </TouchableWithoutFeedback>
                </View>
                {/* <View style={styles.form}>

                </View> */}
                <Text>Open up App.js to start working on your app!</Text>
            </View>
          );
    }
}
