import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F303F',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 120,
    paddingBottom: 120,
  },
  buttons: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
  },
  button: {
      fontSize: 24,
      color: '#ffffff'
  },
  form: {
      backgroundColor: '#393A48',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      borderRadius: 25,
  },
  input: {
    height: 60, 
    backgroundColor: 'white',
    borderWidth: 1,
    width: '80%',
    borderRadius: 50,
    margin: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            username: 'Username',
            password: 'Password'
        }
    }

    onChangeUsername(text) {
        this.setState({ username: text })
    }

    onChangePassword(text) {
        this.setState({ password: text })
    }

    render() {
        // const [value, onChangeText] = React.useState('Useless Placeholder');
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
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => this.onChangeUsername(text)}
                        value={this.state.username}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => this.onChangePassword(text)}
                        value={this.state.password}
                    />
                </View>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
          );
    }
}
