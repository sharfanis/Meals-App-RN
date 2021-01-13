import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../constants/Color";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        props.onSelect();
      }}
    >
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text style={styles.textStyling}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: Color.blackColor,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0 , height: 2 } ,
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyling: {
      fontFamily: 'imbue-bold'
  }
});

export default CategoryGridTile;
