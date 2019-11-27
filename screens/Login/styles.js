import {
    StyleSheet
  } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#2F303F",
      paddingTop: 120,
      paddingBottom: 120,
      height: "100%"
    },
    buttons: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
    button: {
      fontSize: 24,
      color: "#ffffff"
    },
    form: {
      backgroundColor: "#393A48",
      margin: 20,
      borderRadius: 25,
      paddingTop: 40,
      paddingBottom: 40,
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
    },
    input: {
      width: "90%",
      height: 60,
      backgroundColor: "white",
      borderWidth: 1,
      borderRadius: 50,
      margin: 20,
      paddingLeft: 20,
      paddingRight: 20
    },
    submitButton: {
      marginTop: 20,
      borderRadius: 100,
      backgroundColor: "#AC5FCC",
      padding: 20
    },
    otherOptionsContainer: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      marginTop: 150,
    },
    otherOptions: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  });
  
export default styles;