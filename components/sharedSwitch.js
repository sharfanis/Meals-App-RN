import React from "react";
import { Switch, StyleSheet, View, Text } from "react-native";
import Color from "../constants/Color";

const SharedSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
         trackColor={{ true: Color.primaryColor}}
         thumbColor={Color.accentColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
    marginVertical: 10
  },
});

export default SharedSwitch;
