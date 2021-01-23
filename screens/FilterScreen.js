import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Color from "../constants/Color";
import SharedSwitch from "../components/sharedSwitch";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../store/actions/mealAction";

const FilterScreen = (props) => {
  // Manage States of the Switch button

  const [isGluten, setGlutenSwitchState] = useState(false);
  const [isVegan, setVeganSwitchState] = useState(false);
  const [isLactoseFree, setLactoseFreeSwitchState] = useState(false);
  const [isVegeterian, setVegeterainSwitchState] = useState(false);

  // To get navigation from props. // Array Destructuring..
  const { navigation } = props;

  // To have a communication between your state and navigation .this tis way
  // We wrapped our function with useCallBack so that it only updates when our state changes and only recreates if the dependency changes.
  // const saveFilters = useCallback(() => {
  //   const appliedFilter = {
  //     glutenFree: isGluten,
  //     lactoseFree: isLactoseFree,
  //     vegan: isVegan,
  //     vegeterian: isVegeterian,
  //   };
  //   console.log('applied Filters', appliedFilter);
  //   // So this function will only be recreated only when these 4 states changes. this comes in useCallback Hook.
  // }, [isGluten, isLactoseFree , isVegeterian, isVegan]);
  // New logic lies below as applyFiltersHandler.

  // We'll use dispatch to dispatch an action.
  const dispatch = useDispatch();
  // Also we can't use useDispatch directly it has be inside a function component and then have to be used.
  // TO prevent infinite loop we'll use useCallBack and will use dispatch and the mealid as the dependency.
  const applyFiltersdHandler = useCallback(() => {
    const appliedFilter = {
      glutenFree: isGluten,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegeterian: isVegeterian,
    };
    dispatch(setFilters(appliedFilter));
  }, [dispatch, isGluten, isLactoseFree, isVegeterian, isVegan]);

  // WE dont' want useEffect to work after every rerender in component only when navigation changes so we used array destrcutiring .
  useEffect(() => {
    navigation.setParams({ save: applyFiltersdHandler });
  }, [applyFiltersdHandler]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>

      <SharedSwitch
        label="Gluten-free"
        state={isGluten}
        onChange={(newValue1) => setGlutenSwitchState(newValue1)}
      />

      <SharedSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue2) => setLactoseFreeSwitchState(newValue2)}
      />

      <SharedSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue3) => setVeganSwitchState(newValue3)}
      />

      <SharedSwitch
        label="Vegeterian"
        state={isVegeterian}
        onChange={(newValue4) => setVegeterainSwitchState(newValue4)}
      />
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "white" : Color.primaryColor,
    },
    headerTintColor: Platform.OS === "android" ? Color.primaryColor : "white",
    headerTitleStyle: {
      fontSize: 25,
      fontFamily: "imbue-bold",
    },
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

    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => {
            navData.navigation.getParam("save")();
          }}
        ></Item>
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    margin: 20,
    textAlign: "center",
  },
});

export default FilterScreen;
