import React from "react";
import { View, Text, Button , StyleSheet } from "react-native";

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> The Meals Details Screen</Text>
      <Button title ="Goto categories" onPress = { () => {
        // props.navigation.navigate('Categories')  or 

        props.navigation.popToTop()

      }}
      />
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
