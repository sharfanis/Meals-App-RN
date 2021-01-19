import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Color from "../constants/Color";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Colors } from "react-native/Libraries/NewAppScreen";

// Make a key value pair
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      // navigationOptions: {
      //   headerTitle : "Meal Categories !!"
      // }
    },
    CategoryMeals: {
      screen: CategoriesMealsScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
    // },
    // {
    // initialRouteName: 'Categories'
    // },
  },

  // {
  //   mode: "modal",
  // },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? "white" : Color.primaryColor,
      },
      headerTintColor: Platform.OS === "android" ? Color.primaryColor : "white",
      headerTitleStyle: {
        fontSize: 25,
        fontFamily: "imbue-bold",
      },
    },
  }
);

// Making a new Favorite Meals Navigator.
const FavoriteMealsNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
});


const tabConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Color.primaryColor
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Color.accentColor
    },
  },
};

// Tab Navigation
const MealFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabConfig , {
      activeColor : Colors.accentColor,
      shifting: true
    })
    : createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          activeTintColor: Color.accentColor,
        },
      });

export default createAppContainer(MealFavTabNavigator);
