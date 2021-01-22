import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
// IMport Buttons with an S not Button .
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/mealAction";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  //Gettting the MEALS from the store (REDUX).
  const availabelMeals = useSelector((state) => state.meals.meals);

  const mealDetailId = props.navigation.getParam("mealId");
  // const mealTitle = props.navigation.getParam("mealTitle");
  const selectedMeal = availabelMeals.find((x) => x.id === mealDetailId);

  // So ideally you can use useEffect but the problem is it works after each render cycle and then it calcvulates the
  // meal title so why not pass the title from the previous meal list as a PARAM , that'll be BLAZING FAST renedering on screen.

  // We'll use dispatch to dispatch an action.
  const dispatch = useDispatch();
  // Also we can't use useDispatch directly it has be inside a function component and then have to be used.
  // TO prevent infinite loop we'll use useCallBack and will use dispatch and the mealid as the dependency.
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealDetailId));
  }, [dispatch, mealDetailId]);

  // We'll use this to pass value to the navaigation through settign params.
  useEffect(() => {
    // To access the avialbel Meals inside the MealDetailScreen.navigationOptions we can set param.
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image
          source={{ uri: selectedMeal.imageUrl }}
          style={styles.imageStyle}
        />
        <View style={styles.mealDetail}>
          <DefaultText>Time:{selectedMeal.duration}m</DefaultText>
          <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>
            Style:{selectedMeal.affordability.toUpperCase()}
          </DefaultText>
        </View>

        <Text style={styles.title}>Ingredients</Text>

        {selectedMeal.ingredients.map((ingredient) => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}

        <Text style={styles.title}>Steps</Text>

        {selectedMeal.steps.map((step) => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

// To set the header on the screen.
MealDetailScreen.navigationOptions = (navigationData) => {
  //const mealDetailId = navigationData.navigation.getParam("mealId");
  // const mealDetails = MEALS.find((x) => x.id === mealDetailId);

  const mealDetailTitle = navigationData.navigation.getParam("mealTitle");

  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  return {
    headerTitle: mealDetailTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Fav" iconName="ios-star" onPress={toggleFavorite} />
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
