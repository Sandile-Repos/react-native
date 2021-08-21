import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  View,
  Touchable,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableWithoutFeedback activeOpacity={0.8} onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GoalItem;
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
