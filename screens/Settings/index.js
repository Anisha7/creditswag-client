import React, { Component, useState } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView
} from "react-native";
import styles from "./styles";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ToggleSwitch from "toggle-switch-react-native";

const ProfileTab = ({ img, name }) => {
  return (
    <View style={styles.profileTab}>
      <Image style={styles.profileImage} source={{ uri: img }} />
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

const AccountSettingsTab = ({ title, link }) => {
  const redirect = () => Alert.alert(`TODO: go to ${link}`);
  return (
    <TouchableHighlight onPress={() => redirect()}>
      <View style={styles.settingsTabContainer}>
        <Text style={styles.settingsTitle}>{title}</Text>
        <FontAwesomeIcon
          icon={faChevronRight}
          size={24}
          style={{ color: "#9C9CA3" }}
        />
      </View>
    </TouchableHighlight>
  );
};

const NotificationSettingsTab = ({ title }) => {
  const [switchStatus, setSwitchStatus] = useState(false);
  // TODO: do something when status switches
  return (
    <View style={styles.settingsTabContainer}>
      <Text style={styles.settingsTitle}>{title}</Text>
      <ToggleSwitch
        isOn={switchStatus}
        onColor="#B060CA"
        offColor="#3D3D4C"
        labelStyle={{ color: "black", fontWeight: "900" }}
        size="large"
        onToggle={isOn => setSwitchStatus(isOn)}
      />
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
    const accountSettingTabsData = [
      {
        title: "Change email",
        link: "changeEmail",
        id: "0-changemail"
      },
      {
        title: "Change password",
        link: "changepassword",
        id: "1-changepassword"
      },
      {
        title: "Search for payments",
        link: "paymentsearch",
        id: "2-payments"
      },
      {
        title: "Add re-occuring bill",
        link: "bills",
        id: "3-bills"
      }
    ];
    const notificationSettingTabsData = [
      {
        title: "Daily reminders",
        id: "0-reminders"
      },
      {
        title: "In-app sounds",
        id: "1-sounds"
      },
      {
        title: "In-app vibrate",
        id: "2-vibrate"
      },
      {
        title: "Account status notification",
        id: "2-statusNotif"
      },
      {
        title: "Set PIN code",
        id: "2-pin"
      },
      {
        title: "Spending notifications",
        id: "2-spendingNotif"
      }
    ];
    return (
      <View style={styles.container}>
        <ScrollView>
          <ProfileTab
            img={"https://via.placeholder.com/80"}
            name={"Timofey Makhlay"}
          />
          <View style={styles.containerStat}>
            <Image source={require("../../assets/Streak.png")} />
            <Text style={styles.statText}>188</Text>
          </View>
          <View style={styles.containerSettingsTab}>
            <Text style={styles.settingsHeading}>About</Text>
            {accountSettingTabsData.map(({ title, link }) => (
              <AccountSettingsTab key={title} title={title} link={link} />
            ))}

            <Text style={styles.settingsHeading}>Notification</Text>
            {notificationSettingTabsData.map(({ title }) => (
              <NotificationSettingsTab key={title} title={title} />
            ))}
            <View style={styles.superContainerLogout}>
              <TouchableHighlight
                style={styles.containerLogout}
                onPress={() => this.logout()}
              >
                <View style={styles.innerLogoutContainer}>
                  <Image source={require("../../assets/logoutIcon.png")} />
                  <Text style={styles.containerLogoutText}>LOG OUT</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
