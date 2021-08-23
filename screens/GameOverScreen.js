import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          // source={require("../assets/success.png")}
          source={{
            uri: "https://static.euronews.com/articles/stories/05/26/61/88/400x225_cmsv2_7fce538a-0a0e-5133-bf70-24ec472d5618-5266188.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    //required epecially for network(from web) images
    width: "100%",
    height: "100%",
  },
});
