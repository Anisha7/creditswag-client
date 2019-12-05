import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F303F",
    paddingTop: 120,
    paddingBottom: 120,
    // paddingLeft: 20,
    // paddingRight: 20,
    flex: 1,
    justifyContent: "center"
  },
  // profileTab styles
  profileTab: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  profileImage: {
    flex: 1,
    maxHeight: 80,
    maxWidth: 80,
    borderRadius: 15
  },
  profileContent: {
    marginLeft: 20,
    marginRight: 10,
    flex: 3
  },
  profileButton: {
    flex: 1,
    backgroundColor: "#464652",
    // maxHeight: 80,
    // maxWidth: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  profileName: {
    color: "white",
    fontSize: 22
  },
  profileEdit: {
    color: "white",
    fontSize: 14
  },
  // main styles
  containerProfileTab: {
    marginBottom: 30,
  },
  containerStat: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    backgroundColor: "#393948",
    maxWidth: 140,
    marginBottom: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 20,
  },
  containerSettingsTab: {
    flex: 4,
    backgroundColor: "#393948",
    padding: 20,
  },
  containerLogout: {},
  statText: {
    color: "#9C9CA3",
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: "600",
  }
});

export default styles;
