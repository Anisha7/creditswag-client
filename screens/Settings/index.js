import React, { Component } from "react";
import { Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const ProfileTab = ({ img, name }) => {
  return (
    <View style={styles.profileTab}>
      <Image source={{uri: img}} />
      <View>
        <Text>{name} </Text>
        <TouchableHighlight onPress={() => Alert.alert("view profile clicked")}>
          <Text>Edit Profile</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight onPress={() => Alert.alert("profile arrow clicked")}>
        <FontAwesomeIcon
          icon={faArrowRight}
          size={32}
          style={{ color: "white" }}
        />
      </TouchableHighlight>
    </View>
  );
};

export default class SettingsScreen extends Component {
  static navigationOptions = {
    header: null
  };

  logout() {
    const { navigate } = this.props.navigation;
    navigate("Auth");
  }

  render() {
    return (
      <View style={styles.container}>
        <ProfileTab img={""} name={"Timo"} />
        <Text>Settings</Text>
        <TouchableHighlight onPress={() => this.logout()}>
          <Text>LOG OUT</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
