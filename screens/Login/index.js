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

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "Username",
      password: "Password"
    };
  }

  onChangeUsername(text) {
    this.setState({ username: text });
  }

  onChangePassword(text) {
    this.setState({ password: text });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Select Log in or Sign up */}
        <View style={styles.buttons}>
          <TouchableWithoutFeedback
            onPress={() => Alert.alert("Cannot press this one")}
          >
            <Text
              style={{
                fontSize: 24,
                color: "#ffffff"
              }}
            >
              Log in
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => Alert.alert("Press this one")}
          >
            <Text
              style={{
                fontSize: 24,
                color: "#6C6D77"
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
            value={this.state.username}
          />
          <TextInput
            style={styles.input}
            onChangeText={text => this.onChangePassword(text)}
            value={this.state.password}
          />

          <TouchableHighlight onPress={() => alert("forget password")}>
            <Text style={{ color: "#6C6D77" }}>Forgot Password?</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.submitButton}
            onPress={() => alert("Button pressed")}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              size={32}
              style={{ color: "white" }}
            />
          </TouchableHighlight>
        </View>

        {/* Other sign in options */}
        <View style={styles.otherOptionsContainer}>
          <Text style={{ textAlign: "center", color: "#6C6D77" }}>Or Sign in with</Text>
          <View style={styles.otherOptions}>
            <TouchableHighlight style={ styles.otherOptionsButton } onPress={() => alert("facebook")}>
              <FontAwesomeIcon
                icon={faFacebook}
                size={32}
                style={{ color: "#3B5898" , borderRadius: 0 }}
              />
            </TouchableHighlight>
            <TouchableHighlight style={ styles.otherOptionsButton } onPress={() => alert("google")}>
              <FontAwesomeIcon
                icon={faGooglePlus}
                size={32}
                style={{ color: "#F34A39", borderRadius: 0 }}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
