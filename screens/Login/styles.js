import {
    StyleSheet
  } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#2F303F",
      paddingTop: 120,
      paddingBottom: 120,
      flex: 1,
      justifyContent: "space-around"
    },
    navbuttons: {
      // flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      margin: 20
    },
    button: {
      fontSize: 24,
      color: "#ffffff"
    },
    form: {
      backgroundColor: "#393A48",
      margin: 20,
      borderRadius: 25,
      padding: 30,
      alignItems: "center",
      height: 265,
    },
    input: {
      width: "90%",
      height: 60,
      backgroundColor: "white",
      borderWidth: 1,
      borderRadius: 50,
      marginBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      color: "black",
    },
    submitButton: {
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 100,
      backgroundColor: "#AC5FCC",
      padding: 20
    },
    otherOptionsContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      marginTop: 50,
    },
    otherOptions: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
    },
    otherOptionsButton: {
        backgroundColor: "white",
        marginLeft: 5,
        marginRight: 5,
        width: 60,
        padding: 10,
        borderRadius: 50,
        flex: 1,
        alignItems: "center"
    }
  });
  
export default styles;