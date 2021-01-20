import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FilterScreen from "../screens/FilterScreen";
import { Platform , Text} from "react-native";
import Color from "../constants/Color";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { createDrawerNavigator } from "react-navigation-drawer";

// Default Stack Nav Options
const defaultNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "white" : Color.primaryColor,
    },
    headerTintColor: Platform.OS === "android" ? Color.primaryColor : "white",
    headerTitleStyle: {
      fontSize: 25,
      fontFamily: "imbue-bold",
    },
    headerBackTitleStyle: {
      fontFamily: 'imbue'
    }
  },
};

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

  defaultNavOptions
);

// Making a new Favorite Meals Navigator.
const FavoriteMealsNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        headerTitle: "My Favorite Recipes",
      },
    },
    MealDetail: MealDetailScreen,
  },
  defaultNavOptions
);

const tabConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Color.primaryColor,
      tabBarLabel: Platform.OS ==='android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals!!!</Text> : 'Meals'
    },
  },
  Favorites: {
    screen: FavoriteMealsNavigator,
    navigationOptions: {
      tabBarLabel: Platform.OS ==='android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites!!!</Text> : 'Favorites',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Color.accentColor,
    },
  },
};

// Tab Navigation
const MealFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabConfig, {
        activeTintColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          activeTintColor: Color.accentColor,
          labelStyle:{
            fontFamily: 'open-sans-bold'
          }
        },
      });

// The Drawer
const FilterNavigator = createStackNavigator({
  Filters: {
    screen: FilterScreen,
    navigationOptions: {
      headerTitle: "Filter Meals",
      //drawerLabel: "Filters!!!",
    },
  },
});

const MainNavigator = createDrawerNavigator({
  FavoriteMeals: MealFavTabNavigator,
  Filters: FilterNavigator,
},{
 contentOptions: {
   activeTintColor: Color.accentColor,
   labelStyle: {
     fontFamily: 'open-sans-bold'
   }
 }


});

export default createAppContainer(MainNavigator);

//export default createAppContainer(MealFavTabNavigator);
