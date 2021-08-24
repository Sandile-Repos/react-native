import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavouriteScreen = (props) => {
  return (
    <View styles={styles.screen}>
      <Text>The Categories Screen!</Text>
    </View>
  );
};
export default FavouriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
