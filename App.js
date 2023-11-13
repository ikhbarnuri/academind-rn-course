import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName={"User"}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#3c0a6b",
          },
          headerTintColor: "white",
          tabBarActiveTintColor: '#3c0a6b'
        }}
      >
        <BottomTab.Screen
          name={"Welcome"}
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <Ionicons name={"home"} size={size} color={color} />;
            },
          }}
        />
        <BottomTab.Screen
          name={"User"}
          component={UserScreen}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <Ionicons name={"person"} size={size} color={color} />;
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
