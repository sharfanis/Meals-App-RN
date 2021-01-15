import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  TouchableNativeFeedbackBase,
} from "react-native";
import Color from "../constants/Color";

const CategoryGridTile = (props) => {
  let TouchCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchCmp
        style={{ flex: 1 }}
        onPress={() => {
          props.onSelect();
        }}
      >
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.textStyling} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10, // this will make sure the ripple effect doesn't spills and stays inside
    elevation: 20,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    shadowColor: Color.blackColor,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    // alignItems: 'flex-end',
    justifyContent: "flex-end",
    alignItems: "center",
    //justifyContent: 'center',
  },
  textStyling: {
    fontFamily: "bangers",
    fontSize: 24,
  },
});

export default CategoryGridTile;
