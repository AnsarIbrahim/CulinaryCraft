import { useContext } from "react";
import { Text, View } from "react-native";
import { FavoritesContext } from "../../store/context/favorites-context";
import MealList from "../../components/MealList/MealList";
import { MEALS } from "../../data/dummy-data";
import styles from "./styles";

const FavoritesScreen = () => {
  const favoriteMealscontext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => {
    return favoriteMealscontext.ids.includes(meal.id);
  });
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
};

export default FavoritesScreen;
