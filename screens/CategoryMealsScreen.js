import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View styles={styles.screen}>
      <Text>The Category Meals Screen!</Text>
      <Button
        title="Go to Meal Details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
          // props.navigation.navigate('CategoryMeals') // alternative
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
          // props.navigation.pop(); only avalable in stack navigator while gobackis also available
        }}
      />
    </View>
  );
};
export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
