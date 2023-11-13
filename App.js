import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        animation: 'slide_from_right',
      }}
    >
      <Drawer.Screen
        name={'Categories'}
        component={CategoriesScreen}
        options={{
          title: 'All Cateogries',
        }}
      />
      <Drawer.Screen name={'Favorites'} component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style={'light'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            contentStyle: { backgroundColor: '#3f2f25' },
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen
            name={'MealsCategories'}
            component={DrawerNavigator}
            options={{
              // title: 'All Categories',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={'MealsOverview'}
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const categoryId = route.params.categoryId;
            //
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
          <Stack.Screen
            name={'MealDetail'}
            component={MealDetailScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title={'Tap me!'} />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
