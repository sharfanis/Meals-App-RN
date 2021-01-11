import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from 'react-native';
import Color from '../constants/Color';


// Make a key value pair
const MealsNavigator = createStackNavigator(
  {
  Categories: {
    screen: CategoriesScreen
  },
  CategoryMeals: {
    screen: CategoriesMealsScreen
  },
  MealDetail: {
    screen: MealDetailScreen
  }
}, 
{
 defaultNavigationOptions: {
    headerStyle: {
    backgroundColor: Platform.OS === "android" ? Color.primaryColor : "white"
    },
    headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor
  }
});

export default createAppContainer(MealsNavigator);
