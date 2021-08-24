import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndriod,
        }),
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndriod: {
    backgroundColor: colors.primary,
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
  },
  title: {
    color: Platform.OS === "ios" ? colors.primary : "white",
  },
});
