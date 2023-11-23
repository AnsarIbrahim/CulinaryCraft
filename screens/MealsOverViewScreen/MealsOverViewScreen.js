import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../../data/dummy-data";
import MealList from "../../components/MealList/MealList";

const MealsOverViewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  return <MealList items={displayedMeals} />;
};

export default MealsOverViewScreen;
