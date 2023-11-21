import { FlatList, View, Text } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';
import CategoryGridTile from '../../components/CategoryGrid/CategoryGridTile';
import styles from './styles';

const renderCategoryItem = (itemData) => {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
    };

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      styles={styles.screen}
    />
  );
};

export default CategoriesScreen;