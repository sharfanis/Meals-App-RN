import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";

const FavoritesScreen = props => {

 //Gettting the MEALS from the store (REDUX).
 const availabelMeals = useSelector(state => state.meals.filteredMeals);

  const favMeals = availabelMeals.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return (
    <MealList listData={favMeals} navigation={props.navigation}/>
  );
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
});

export default FavoritesScreen;
