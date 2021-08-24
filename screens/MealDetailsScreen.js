import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const MealDetailsScreen = (props) => {
  return (
    <View styles={styles.screen}>
      <Text>The Meal Details Screen!</Text>
      <Button
        title="Go to Categories"
        onPress={() => {
          props.navigation.popToTop(); //Takes us back to route or top screen
        }}
      />
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
