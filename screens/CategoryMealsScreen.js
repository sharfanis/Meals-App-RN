import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoriesMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text> The Category Meals Screen</Text>
      <Button
        title="Goto Meal Detail Screen"
        onPress={() => {
          props.navigation.navigate( 'MealDetail' );
        }}
      />
      <Button title ="Go back" 
      onPress = {() => {
        props.navigation.goBack() // or you can use pop()
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealsScreen;
