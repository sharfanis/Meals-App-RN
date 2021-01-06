import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesMealsScreen = (props) => {
  // Extracting the data which is send by previous screen (categories screen)
  // const catID = props.navigation.getParam("categorytId");

  // const selectedCategory = CATEGORIES.find((cat) => cat.id === catID).title;

  return (
    <View style={styles.screen}>
      <Text> The Category Meals Screen</Text>
      <Button
        title="Goto Meal Detail Screen"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack(); // or you can use pop()
        }}
      />
    </View>
  );
};

// Dynamically extracting navigationOptions.
CategoriesMealsScreen.navigationOptions = navigationData => {
 const catID = navigationData.navigation.getParam('categoryId');
 //const selectedCategory = CATEGORIES.find(cat => cat.id === catID);
 console.log(catID);
//  return {
//    headerTitle: selectedCategory.title
//  };
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealsScreen;
