import React from "react";
import { View, Text, Button , StyleSheet } from "react-native";



const MealDetailScreen = props => {

  const mealDetails = props.navigation.getParam("steps");
  return (
    <View style={styles.screen}>
      <Text>{mealDetails}</Text>
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

export default MealDetailScreen;
