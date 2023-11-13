import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';

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
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e0b095',
      }}
    >
      <Drawer.Screen
        name={'Categories'}
        component={CategoriesScreen}
        options={{
          title: 'All Cateogries',
          drawerIcon: ({ color, size }) => {
            return <Ionicons name={'list'} size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name={'Favorites'}
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name={'star'} size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style={'light'} />
      <FavoritesContextProvider>
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
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
