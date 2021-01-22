export const TOGGLE_FAV = "TOGGLE_FAVORITE";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAV, mealId: id };
};
