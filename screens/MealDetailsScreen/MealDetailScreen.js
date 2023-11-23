import { useContext, useLayoutEffect } from "react";
import { View, Image, Text, ScrollView, Button } from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealDetails from "../../components/MealDetails/MealDetails";
import Subtitle from "../../components/MealDetail/Subtitle";
import List from "../../components/MealDetail/List";
import IconButton from "../../components/IconButton/IconButton";
import styles from "./styles";
import { FavoritesContext } from "../../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
  const favoritesMealsContext = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const isFavorite = favoritesMealsContext.ids.includes(mealId);

  const changeFavoritesStatus = () => {
    if (isFavorite) {
      favoritesMealsContext.removeFavorite(mealId);
    } else {
      favoritesMealsContext.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoritesStatus}
          />
        );
      },
    });
  }, [navigation, changeFavoritesStatus]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContiner}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;
