import MealItem from './MealItem';
import { FlatList, StyleSheet, View } from 'react-native';

const MealsList = ({ items }) => {
  function renderMealItem(itemData) {
    const { id, title, imageUrl, duration, complexity, affordability } =
      itemData.item;

    return (
      <MealItem
        id={id}
        title={title}
        imageUrl={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
        style={{ paddingHorizontal: 16 }}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
  },
});
