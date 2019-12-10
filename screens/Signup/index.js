import React, { Component } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
  TextInput,
  TouchableHighlight
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
      username: "",
      password: "",
      email: "",
      name: "",
      errorMessage: "",
      borderColor: "black",
    };
  }

  onChangeUsername(text) {
    this.setState({ username: text });
  }

  onChangePassword(text) {
    this.setState({ password: text });
  }

  onChangeEmail(text) {
    if (!validator.validate(text)) {
      this.setState({ borderColor : 'red '})
    } else {
      this.setState({ borderColor : 'black'})
    }
    this.setState({ email: text });
  }

  onChangeName(text) {
    this.setState({ name: text });
  }

  loginWithFacebook() {
    Alert.alert('login with facebook clicked!')
  }

  loginWithGoogle() {
    Alert.alert('login with google clicked!')
  }

  resetPassword() {
    Alert.alert('forgot password clicked!')
  }

  signup() {
    const { username, password, email, name } = this.state
    const { navigate } = this.props.navigation;
    // implementation
    fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password, email, name })
    })
      .then(res => res.json())
      .then(() => navigate("App"))
      .catch(err => {
        this.setState({ errorMessage: err.message })
      });
  }

  redirectToLogin() {
    const {navigate} = this.props.navigation;
    navigate('Login')
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Select Log in or Sign up */}
        <View style={styles.navbuttons}>
          <TouchableWithoutFeedback
            onPress={() => this.redirectToLogin() }
          >
            <Text
              style={{
                fontSize: 24,
                color: "#6C6D77",
                margin: 10,
              }}
            >
              Log in
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            disabled
          >
            <Text
              style={{
                fontSize: 24,
                color: "#ffffff",

                margin: 10,
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
            onChangeText={text => this.onChangeName(text)}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => this.onChangeUsername(text)}
            placeholder="Username"
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
          />

          <TouchableHighlight
            style={styles.submitButton}
            onPress={() => this.signup()}
            disabled={this.state.borderColor === 'red'}
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
        <Text style={styles.terms}>By signing up, you agree to the Terms and Conditions.</Text>
      </View>
    );
  }
}
