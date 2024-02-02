import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as ScreenOrientation from "expo-screen-orientation";
import * as React from "react";

// Import pages
import { HomeScreen } from "./screens/HomeScreen";
import { PokemonInfos } from "./screens/PokemonInfos";
import { SearchScreen } from "./screens/SearchScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { TeamScreen } from "./screens/TeamScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#fff",
              paddingTop: 10,
            },
            style: {
              backgroundColor: "#fff",
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Search") {
                iconName = focused ? "ios-search" : "ios-search-outline";
              } else if (route.name === "Team") {
                iconName = focused ? "ios-people" : "ios-people-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-cog" : "ios-cog-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#ef4444",
            tabBarInactiveTintColor: "#64748b",
          })}
          sceneContainerStyle={{ backgroundColor: "transparent" }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Search"
            component={SearchStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Team"
            component={TeamStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsStack}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={HomeScreen} />
      <Stack.Screen name="Details" component={PokemonInfos} />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search Pokemon" component={SearchScreen} />
    </Stack.Navigator>
  );
}

function TeamStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Team" component={TeamScreen} />
      <Stack.Screen name="Details" component={PokemonInfos} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Set my account" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
