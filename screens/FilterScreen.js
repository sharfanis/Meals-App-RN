import React from "react";
import { View, Text, StyleSheet , Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Color from '../constants/Color';

const FilterScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style = {styles.title}>Available Filters / Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>Gluten-free</Text>
        <Switch />
      </View>
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
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
   // justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer :{
    flexDirection : 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontFamily: 'open-sans-bold',
    margin: 20,
    textAlign: 'center'
  }
});

export default FilterScreen;
