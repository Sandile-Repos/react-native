import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import colors from "../constants/colors";

const StartGamescreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const numberInputHandler = (InputText) => {
    setEnteredValue(InputText.replace(/[^0-9]/g, "")); //Validation to only allow numbers on input
  };

  return (
    // Keyboard is an Api(not component) from react native that is called to dismiss keybord if you press outside of input or keybord
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric" //number can also include period or comma - for both devices
            // keyboardType="numer-pad" //number only, not including period or comma - ios only
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title={"Reset"}
                onPress={() => {}}
                color={colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={"confirm"}
                onPress={() => {}}
                color={colors.primary}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});
