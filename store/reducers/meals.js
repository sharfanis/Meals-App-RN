import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAV, SET_FILTERS } from "../actions/mealAction";

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

    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMealsWhichUserAsked = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseIntolerant) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegeterian && !meal.isVegeterian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: filteredMealsWhichUserAsked };

    default:
      return state;
  }
};

export default mealsReducers;
