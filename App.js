import React, { useLayoutEffect } from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "./src/constants";

import Explore from "./src/screens/Explore";
import AllMessages from "./src/screens/AllMessages";
import Profile from "./src/screens/Profile";

import UserProfile from "./src/screens/UserProfile";
import Chat from "./src/screens/Chat";

function getTabIcon(routeName) {
  switch (routeName) {
    case "Explore":
      return "ios-beer";
    case "Messages":
      return "ios-chatboxes";
    case "Profile":
      return "ios-person";
  }
}

const Tab = createBottomTabNavigator();
function HomeTabScreen({ navigation, route }) {
  /** Required to set title of parent header
   * https://reactnavigation.org/docs/screen-options-resolution#setting-parent-screen-options-based-on-child-navigators-state
   */
  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getFocusedRouteNameFromRoute(route) });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#F87961",
        style: {
          backgroundColor: "white",
          borderTopWidth: 0,
          shadowOpacity: 0.05,
          shadowRadius: 4,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => (
          <Ionicons
            name={getTabIcon(route.name)}
            size={32}
            color={color}
            style={{ marginTop: 2 }}
          />
        ),
      })}
    >
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Messages" component={AllMessages} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const MainStack = createStackNavigator();
function MainStackScreen() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTintColor: Colors.primaryColor,
        headerStyle: {
          backgroundColor: "#FFF",
        },
        headerTitleStyle: {
          fontWeight: "800",
          color: Colors.textColor,
        },
      }}
    >
      <MainStack.Screen name="Home" component={HomeTabScreen} />
      <MainStack.Screen name="Chat" component={Chat} />
    </MainStack.Navigator>
  );
}

const AppStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal">
        <AppStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ headerShown: false }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
