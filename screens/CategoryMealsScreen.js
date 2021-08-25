import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <View>
        <Button
          title="Go to Details"
          onPress={() => {
            props.navigation.navigate({
              routeName: "MealDetail",
            });
          }}
        />
        <View style={{ height: 20 }}></View>
        <Button
          title="Go Back"
          onPress={() => {
            props.navigation.pop();
          }}
        />
      </View>
    </View>
  );
};

// selectedCategory.title is available but inside component function and cannot be accessed on navigationOptions
// if its an object with static hard coded values
// CategoryMealScreen.navigationOptions = {
//   headerTitle:
// }

//But can also be a function if you need dynamic config that depends on changing data
CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  // console.log(catId);
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
