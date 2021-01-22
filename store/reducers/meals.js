import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAV } from "../actions/mealAction";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      //iF THE INDEX EXISTS THEN REMOVE THE FAV MEAL ELSE ADD THE FAV MEAL.
      if (existingIndex >= 0) {
        const updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavoriteMeals };
      } else {
        const mealToBeAddedAsFav = state.meals.find(
          (meal) => meal.id === action.mealId
        );
        //Add the meal to the fav list.
        const updatedFavoriteMeals = state.favoriteMeals.concat(
          mealToBeAddedAsFav
        );
        return { ...state, favoriteMeals: updatedFavoriteMeals };
      }
    default:
      return state;
  }
  return state;
};

export default mealsReducers;
