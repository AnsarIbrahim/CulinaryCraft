import { Text, View } from "react-native";
import styles from "./styles";

const List = ({ data }) => {
  return data.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
};

export default List;
