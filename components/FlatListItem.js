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
          <Text style={styles.textGib}>Time:{props.duration}m</Text>
          <Text style={styles.textGib}>{props.complexity.toUpperCase()}</Text>
          <Text style={styles.textGib}>
            Style:{props.affordability.toUpperCase()}
          </Text>
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
  textGib: {
    fontFamily: "open-sans-bold",
    color: "purple",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
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
    fontFamily: 'bangers',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});

export default FlatListItem;
