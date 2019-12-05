import React, { Component } from "react";
import { Text, View, TouchableHighlight, Image, alert } from "react-native";
import styles from "./styles";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const ProfileTab = ({ img, name }) => {
  return (
    <View style={styles.profileTab}>
      <Image style={styles.profileImage} source={{uri : img}} />
      <View style={styles.profileContent}>
        <Text style={styles.profileName}>{name} </Text>
        <TouchableHighlight onPress={() => Alert.alert("view profile clicked")}>
          <Text style={styles.profileEdit}>Edit Profile</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight
        style={styles.profileButton}
        onPress={() => Alert.alert("profile arrow clicked")}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size={24}
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
        <ProfileTab
          style={styles.containerProfileTab}
          img={ "https://via.placeholder.com/80" }
          name={"Timofey Makhlay"}
        />
        <View style={styles.containerStat}>
          <Image source={require("../../assets/Streak.png")} />
          <Text style={styles.statText}>188</Text>
        </View>
        <View style={styles.containerSettingsTab}>
          <Text>TODO Tabs</Text>
          <TouchableHighlight
            style={styles.containerLogout}
            onPress={() => this.logout()}
          >
            <Text>LOG OUT</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
