import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoriesScreen = (props) => {
  //Every component wraped with navigation receives special props ofrmethods on prps
  return (
    <View styles={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
          // props.navigation.navigate('CategoryMeals')
        }}
      />
    </View>
  );
};
export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
