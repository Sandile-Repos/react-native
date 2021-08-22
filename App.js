import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGamescreen from "./screens/StartGamescreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
      <StartGamescreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
