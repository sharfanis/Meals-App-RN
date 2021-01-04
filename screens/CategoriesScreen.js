import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style= {{ fontFamily: 'open-sans-bold'}}> The Category Screen</Text>
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

export default CategoriesScreen;
