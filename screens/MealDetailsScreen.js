import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetailsScreen = (props) => {
  return (
    <View styles={styles.screen}>
      <Text>The Meal Details Screen!</Text>
    </View>
  );
};
export default MealDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
