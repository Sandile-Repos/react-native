import React from "react";
import { render } from "react-dom";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

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
