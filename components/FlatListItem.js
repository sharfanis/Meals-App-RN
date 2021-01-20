import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import Color from "../constants/Color";
import DefaultText from "./DefaultText";

const FlatListItem = (props) => {
  let TouchCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          props.onSelectMeal();
        }}
      >
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
          <View style={styles.titleContainer} >
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <DefaultText>Time:{props.duration}m</DefaultText>
          <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
          <DefaultText>
            Style:{props.affordability.toUpperCase()}
          </DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  textStyle: {
    fontFamily: "bangers",
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12
  } ,
  title: {
    fontFamily: "bangers",
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});

export default FlatListItem;
