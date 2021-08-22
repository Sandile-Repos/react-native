import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
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
});
