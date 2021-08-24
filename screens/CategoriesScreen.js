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
          // props.navigation.push('CategoryMeals') //used where you want to be in the same screen but diff parts eg different area(eg diff folder in a root directory)
          //props.navigation.replace("CategoryMeals" ); //replacing and not going through the stack, so you get no back button since stack is empty(can be used eg when user signs in and not go back to login screen )
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
