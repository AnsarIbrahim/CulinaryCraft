import { useLayoutEffect } from "react";
import { View, Image, Text, ScrollView, Button } from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealDetails from "../../components/MealDetails/MealDetails";
import Subtitle from "../../components/MealDetail/Subtitle";
import List from "../../components/MealDetail/List";
import IconButton from "../../components/IconButton/IconButton";
import styles from "./styles";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButton = () => {
    console.log("headerButton");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" color="white" onPress={headerButton} />;
      },
    });
  }, [navigation, headerButton]);

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
