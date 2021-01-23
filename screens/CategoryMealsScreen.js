import React from "react";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";
import { View, StyleSheet } from "react-native";

const CategoriesMealsScreen = (props) => {
  // Extracting the data which is send by previous screen (categories screen)
  const catID = props.navigation.getParam("categoryId");
  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catID).title;

  // REDUX way of gertting meals from the store.
  // state is fine but meals is the same variable we selected inside the app .js for root reducer.
  // this will then go inside the mealReducer and from there we can get filteredMeals.
  //this will select the slice of our state , not the complete state. check out the meals.js file inside reducers.
  const availabelMeals = useSelector((state) => state.meals.filteredMeals);

  // Fetching all the meals array with the category ID.
  const displayedMeals = availabelMeals.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );
  // The navigation for meal detail is provided inside the navigator which allows the control to go from catyegory meals to detail
  // page but when the MealList is plucked out it won't work . solution is to pass the NAVIGATION as a prop so that it can be used.

  let val;
  if (displayedMeals.length > 0) {
    val = <MealList listData={displayedMeals} navigation={props.navigation} />;
  } else {
    val = (
      <View style={styles.screen}>
        <DefaultText>No meal found. May be check the filters?</DefaultText>
      </View>
    );
  }
  return val;
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealsScreen;
