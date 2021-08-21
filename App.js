import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  View,
} from "react-native";

export default function App() {
  const [enterGoal, setEnterGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  };

  const addGoalHanler = () => {
    // setCourseGoals([...courseGoals, enterGoal]);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enterGoal },
    ]); //update state based on old state
    //Note: key value object is added because Flatlist expect an object but we entergGoal is just a list of strings, other it will have been just entergoal if it was an object
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enterGoal}
        />
        <Button title="ADD" onPress={addGoalHanler} />
      </View>
      <FlatList //use flatlist for very long list that will go beyond you screen
        keyExtractor={(item, index) => item.id} //keyExtractor is added is name of key in object is not key
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
