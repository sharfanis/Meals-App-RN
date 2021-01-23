import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = (props) => {
  //Gettting the MEALS from the store (REDUX).
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  let val;
  if (favMeals.length === 0 || !favMeals) {
    val = (
      <View style={styles.screen}>
        <DefaultText style={styles.content}>No Favorite Meals found.</DefaultText>
      </View>
    );
  } else {
    val = <MealList listData={favMeals} navigation={props.navigation} />;
  }
  // const favMeals = availabelMeals.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return val;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Favorite Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
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
  content: {
   fontSize: 29,
  }
});

export default FavoritesScreen;
