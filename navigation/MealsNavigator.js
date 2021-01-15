import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Color from "../constants/Color";

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
        backgroundColor: Platform.OS === "android" ? "white" : Color.primaryColor,
      },
      headerTintColor: Platform.OS === "android" ? Color.primaryColor : "white",
      headerTitleStyle: {
        fontSize:25,
        fontFamily: "imbue-bold",
      },
    },
  }
);

export default createAppContainer(MealsNavigator);
