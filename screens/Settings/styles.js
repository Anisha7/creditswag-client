import {
    StyleSheet
  } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#2F303F",
      paddingTop: 120,
      paddingBottom: 120,
      paddingLeft: 20,
      paddingRight: 20,
      flex: 1, 
      justifyContent: 'center'
    },
    // profileTab styles
    profileTab: {
        flex: 1,
        flexDirection: 'row'
    },
    profileImage: {
      flex: 1,
      maxHeight: 80,
      maxWidth: 80,
      borderRadius: 15,
    },
    profileContent: {
      marginLeft: 20,
      marginRight: 10,
      flex: 3
    },
    profileButton: {
      flex: 1,
      backgroundColor: "#979797",
      maxHeight: 80,
      maxWidth: 80,
    },
    profileName: {
      color: 'white',
      fontSize: 22,
    },
    profileEdit: {
      color: 'white',
      fontSize: 14,
    },
    // main styles
    containerProfileTab: {

    },
    containerStat: {

    },
    containerSettingsTab: {
      flex: 3,
      backgroundColor: "#393948"
    },
    containerLogout: {

    }
  });
  
export default styles;