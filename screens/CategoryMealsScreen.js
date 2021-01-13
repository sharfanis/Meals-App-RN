import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import FlatListItem from '../components/FlatListItem';

const CategoriesMealsScreen = (props) => {
  // Extracting the data which is send by previous screen (categories screen)
  const catID = props.navigation.getParam("categoryId");
  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catID).title;

  // Fetching all the meals array with the category ID.

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );

  const renderMeals = itemData => {

     return(
      <View>
        <FlatListItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              steps: itemData.item.steps, // Sending the data to the next screen
            },
          });
        }}
      />
      </View>
     );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeals}
        style={{width:'100%'}}
      />
    </View>
  );
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
