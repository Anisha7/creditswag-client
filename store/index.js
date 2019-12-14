import { AsyncStorage } from "react-native";

export const _storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
    console.log(error);
  }
};

export const _retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
  } catch (error) {
    // Error retrieving data
    console.log(error);
  }
};

export const _removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // Error saving data
    console.log(error);
  }
};
