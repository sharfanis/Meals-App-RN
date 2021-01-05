import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

// Make a key value pair
const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoriesMealsScreen,
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
