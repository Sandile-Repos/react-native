import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

import Colors from "../constant/Colors";
import * as authActions from "../store/actions/auth";

const StartupScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      const tryLogin = async () => {
        const userData = await AsyncStorage.getItem("userData");
        if (!userData) {
          dispatch(authActions.setDidTryAL());
          return;
        }
        const transformedData = JSON.parse(userData);
        const { token, userId, expiryDate } = transformedData;
        const expirationDate = new Date(expiryDate);

        if (expirationDate <= new Date() || !token || !userId) {
          dispatch(authActions.setDidTryAL());
          return;
        }

        const expirationTime = expirationDate.getTime() - new Date().getTime();

        dispatch(authActions.authenticate(userId, token, expirationTime));
      };
      tryLogin();
    }, 500);
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartupScreen;