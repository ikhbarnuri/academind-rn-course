import { FlatList, StyleSheet, View } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealList/MealItem';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealList/MealsList';

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meatItem) => {
    return meatItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
