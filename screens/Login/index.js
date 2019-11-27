import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert, TextInput, TouchableHighlight } from 'react-native';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#2F303F',
    paddingTop: 120,
    paddingBottom: 120,
    height: '100%'
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
      margin: 20,
      borderRadius: 25,
      paddingTop: 40,
      paddingBottom: 40,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 60, 
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    margin: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  submitButton: {
      marginTop: 20,
      borderRadius: 100,
      backgroundColor: '#AC5FCC',
      padding: 20,
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
                    <TouchableHighlight style={styles.submitButton} onPress={alert('Button pressed')}>
                            <FontAwesomeIcon icon={ faArrowRight } size={ 32 } style={{ color: 'white' }}/>
                    </TouchableHighlight>
                </View>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
          );
    }
}
