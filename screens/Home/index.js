import React, { Component } from "react";
import {
  Text, View, TouchableHighlight
} from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  logout() {
    const {navigate} = this.props.navigation;
    navigate('Auth')
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Home</Text>
        <TouchableHighlight
            onPress={() => this.logout()}
          >
              <Text>LOG OUT</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
