import { View, Text } from "react-native";
import { MEALS } from "../../data/dummy-data";
import styles from "./styles";

const MealsOverViewScreen = ({ route }) => {
  const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals OverView Screen - {catId}</Text>
    </View>
  );
};

export default MealsOverViewScreen;
