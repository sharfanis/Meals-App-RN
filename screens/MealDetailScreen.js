import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
// IMport Buttons with an S not Button .
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { useSelector } from "react-redux";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  //Gettting the MEALS from the store (REDUX).
  const availabelMeals = useSelector((state) => state.meals.filteredMeals);

  const mealDetailId = props.navigation.getParam("mealId");
  const mealDetails = MEALS.find((x) => x.id === mealDetailId);
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image
          source={{ uri: mealDetails.imageUrl }}
          style={styles.imageStyle}
        />
        <View style={styles.mealDetail}>
          <DefaultText>Time:{mealDetails.duration}m</DefaultText>
          <DefaultText>{mealDetails.complexity.toUpperCase()}</DefaultText>
          <DefaultText>
            Style:{mealDetails.affordability.toUpperCase()}
          </DefaultText>
        </View>

        <Text style={styles.title}>Ingredients</Text>

        {mealDetails.ingredients.map((ingredient) => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}

        <Text style={styles.title}>Steps</Text>

        {mealDetails.steps.map((step) => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </View>
    </ScrollView>
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
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
  mealDetail: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    flex: 1,
    fontFamily: "bangers",
    fontSize: 22,
    textAlign: "center",
  },
  textGib: {
    fontFamily: "imbue",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
