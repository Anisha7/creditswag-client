import React, { Component } from "react";
import {
  Text, View, TouchableHighlight
} from "react-native";

export const ProfileHeader = ({img, name, score}) => {
    return (
        <View>
            <View>
                {/* TODO: add back arrow */}
                <Text>Profile</Text>
            </View>
            <Image source={{uri: img}} />
            <Text>{name}</Text>
            <View>
                <Image source={require("../../assets/Streak.png")} />
                <Text>{score}</Text>
            </View>
        </View>
    )
}

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <ProfileHeader />
        <View>
            
        </View>
      </View>
    );
  }
}
