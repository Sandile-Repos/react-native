import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const StartGamescreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title={"Reset"} onPress={() => {}} />
          <Button title={"confirm"} onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default StartGamescreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    // all  these shadow properties are for IOS
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius:6,
    // shadowOpacity:0.26,
    elevation: 8, //for andriod - it based on material design
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
