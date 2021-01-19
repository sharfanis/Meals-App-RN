import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoriesMealsScreen = (props) => {
  // Extracting the data which is send by previous screen (categories screen)
  const catID = props.navigation.getParam("categoryId");
  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catID).title;

  // Fetching all the meals array with the category ID.

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );
 // The navigation for meal detail is provided inside the navigator which allows the control to go from catyegory meals to detail
  // page but when the MealList is plucked out it won't work . solution is to pass the NAVIGATION as a prop so that it can be used. 
  return <MealList listData={displayedMeals} navigation={props.navigation}/>;
};

// Dynamically extracting navigationOptions. It used because you can extract title above but then it won't be accessible .
//Please check categories screen navigation options fro what i am talking about.
CategoriesMealsScreen.navigationOptions = (navigationData) => {
  const catID = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoriesMealsScreen;
