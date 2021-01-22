import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import FlatListItem from '../components/FlatListItem';

const MealList = (props) => {
  const renderMeals = (itemData) => {
    return (
      <View>
        <FlatListItem
          title={itemData.item.title}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          image={itemData.item.imageUrl}
          onSelectMeal={() => {
            props.navigation.navigate({
              routeName: "MealDetail",
              params: {
                mealId: itemData.item.id, // Sending the data to the next screen
                mealTitle: itemData.item.title
              },
            });
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={renderMeals}
        style={{ width: "95%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    list: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
export default MealList;
