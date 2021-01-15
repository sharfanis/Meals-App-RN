import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
// IMport Buttons with an S not Button .
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import  CustomHeaderButton  from "../components/HeaderButton";

const MealDetailScreen = (props) => {
  const mealDetailId = props.navigation.getParam("mealId");
  const mealDetails = MEALS.find((x) => x.id === mealDetailId);
  return (
    <View style={styles.screen}>
      {/* <Text style={{fontFamily:'imbue-bold'}}>{mealDetails}</Text> */}
    </View>
  );
};

// To set the header on the screen.
MealDetailScreen.navigationOptions = (navigationData) => {
  const mealDetailId = navigationData.navigation.getParam("mealId");
  const mealDetails = MEALS.find((x) => x.id === mealDetailId);
  return {
    headerTitle: mealDetails.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Fav"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as Favs");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
