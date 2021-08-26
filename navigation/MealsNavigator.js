import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createBottomTabNavigator } from "react-navigation-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailsScreen,
  },
  {
    // mode: "modal",
    //initialRouteName: "MealDetail", //default screen it will route to instead of the first one in the stack, note you cant go back if your initial screen is the last screen on the stack
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator, // can be single screen or stack
  Favourite: FavouriteScreen,
});

// export default createAppContainer(MealsNavigator);
export default createAppContainer(MealsFavTabNavigator);
