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
import validator from "email-validator";

export default class SignupScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      errorMessage: "",
      borderColor: "black"
    };
  }

  onChangeFirstName(text) {
    this.setState({ firstName: text });
  }

  onChangeLastName(text) {
    this.setState({ lastName: text });
  }

  onChangeEmail(text) {
    if (!validator.validate(text)) {
      this.setState({ borderColor: "red " });
    } else {
      this.setState({ borderColor: "black" });
    }
    this.setState({ email: text });
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

  signup() {
    const { navigate } = this.props.navigation;
    const { lastName, password, email, firstName } = this.state;

    fetch(`${BASE_URL}/user/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname: firstName,
        lname: lastName,
        email,
        password
      })
    })
      .then(res => {
        console.log(res);
        if (res.ok === false) {
          throw Error("Try again!");
        }
        res.json();
      })
      .then(json => {
        console.log(json);
        navigate("App");
      })
      .catch(err => {
        this.setState({ errorMessage: err.message });
      });
  }

  redirectToLogin() {
    const { navigate } = this.props.navigation;
    navigate("Login");
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
            <TouchableWithoutFeedback onPress={() => this.redirectToLogin()}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#6C6D77",
                  margin: 10
                }}
              >
                Log in
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback disabled>
              <Text
                style={{
                  fontSize: 24,
                  color: "#ffffff",

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
              onChangeText={text => this.onChangeFirstName(text)}
              placeholder="First name"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => this.onChangeLastName(text)}
              placeholder="Last name"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => this.onChangeEmail(text)}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => this.onChangePassword(text)}
              placeholder="Password"
              secureTextEntry={true}
            />

            <TouchableHighlight
              style={styles.submitButton}
              onPress={() => this.signup()}
              disabled={this.state.borderColor === "red"}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                size={32}
                style={{ color: "white" }}
              />
            </TouchableHighlight>
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          </View>

          {/* Other sign in options */}
          {/* <View style={styles.otherOptionsContainer}>
          <Text style={{ textAlign: "center", color: "#6C6D77" }}>Or Sign up with</Text>
          <View style={styles.otherOptions}>
            <TouchableHighlight style={ styles.otherOptionsButton } onPress={() => this.loginWithFacebook()}>
              <FontAwesomeIcon
                icon={faFacebook}
                size={32}
                style={{ color: "#3B5898" , borderRadius: 0 }}
              />
            </TouchableHighlight>
            <TouchableHighlight style={ styles.otherOptionsButton } onPress={() => this.loginWithGoogle()}>
              <FontAwesomeIcon
                icon={faGooglePlus}
                size={32}
                style={{ color: "#F34A39", borderRadius: 0 }}
              />
            </TouchableHighlight>
          </View>
        </View> */}
          {/* TODO: link terms and conditions */}
          <Text style={styles.terms}>
            By signing up, you agree to the Terms and Conditions.
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
