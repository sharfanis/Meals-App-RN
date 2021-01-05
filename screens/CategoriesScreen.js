import React from "react";
import { View, Text, Button,  FlatList , StyleSheet } from "react-native";

const CategoriesScreen = props => {
  console.log(props);
  return (
   <FlatList numColumns={1}  />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
