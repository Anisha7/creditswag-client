import React, { Component } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import styles from "./styles";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BASE_URL } from "react-native-dotenv";
import { _storeData } from '../../store';

// TODO: social auth with https://www.npmjs.com/package/react-native-simple-auth

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "", // sent by backend if errored
    };
  }

  onChangeUsername(text) {
    this.setState({ username: text });
  }

  onChangePassword(text) {
    this.setState({ password: text });
  }

  loginWithFacebook() {
    Alert.alert("login with facebook clicked!");
  }

  loginWithGoogle() {
    Alert.alert("login with google clicked!");
  }

  resetPassword() {
    Alert.alert("forgot password clicked!");
  }

  login() {
    const { navigate } = this.props.navigation;
    const { username, password } = this.state
    
    fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        console.log(res)
        return res.json()
      }).then((data) => {
        console.log("data: ")
        console.log(data);
        console.log("HERE")
        _storeData("AuthToken", data.Authorization) // TODO: test that this works
        console.log("HERE2")
        return navigate("App")
      }).catch(err => {
        this.setState({ errorMessage: err.message })
      });
  }

  redirectToSignup() {
    const { navigate } = this.props.navigation;
    navigate("Signup");
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
      <View style={styles.container}>
        {/* Select Log in or Sign up */}
        <View style={styles.navbuttons}>
          <TouchableWithoutFeedback disabled>
            <Text
              style={{
                fontSize: 24,
                color: "#ffffff",
                margin: 10
              }}
            >
              Log in
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.redirectToSignup()}>
            <Text
              style={{
                fontSize: 24,
                color: "#6C6D77",
                margin: 10
              }}
            >
              Sign up
            </Text>
          </TouchableWithoutFeedback>
        </View>

        {/* Form for login */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.onChangeUsername(text)}
            placeholder="email"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => this.onChangePassword(text)}
            placeholder="password"
            secureTextEntry={true}
          />

          <TouchableHighlight onPress={() => this.resetPassword()}>
            <Text style={{ color: "#6C6D77" }}>Forgot Password?</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.submitButton}
            onPress={() => this.login()}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              size={32}
              style={{ color: "white" }}
            />
          </TouchableHighlight>
          
          <Text style={{color: "red"}}>{this.state.errorMessage}</Text>
        </View>
        {/* Other sign in options */}
        <View style={styles.otherOptionsContainer}>
          <Text style={{ textAlign: "center", color: "#6C6D77" }}>
            Or Sign in with
          </Text>
          <View style={styles.otherOptions}>
            <TouchableHighlight
              style={styles.otherOptionsButton}
              onPress={() => this.loginWithFacebook()}
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size={32}
                style={{ color: "#3B5898", borderRadius: 0 }}
              />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.otherOptionsButton}
              onPress={() => this.loginWithGoogle()}
            >
              <FontAwesomeIcon
                icon={faGooglePlus}
                size={32}
                style={{ color: "#F34A39", borderRadius: 0 }}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      </KeyboardAvoidingView>
    );
  }
}
