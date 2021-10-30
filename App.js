import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Colors, Styles } from "./src/constants";

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
      return "ios-chatbubbles";
    case "Profile":
      return "ios-person";
  }
}

const Tab = createBottomTabNavigator();
function HomeTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={(options) => ({
        ...Styles.Header,
        ...Styles.Tabs,
        tabBarIcon: ({ color }) => (
          <Ionicons
            name={getTabIcon(options.route.name)}
            size={32}
            color={color}
            style={{ marginTop: 2 }}
          />
        ),
      })}
    >
      <Tab.Screen name="Explore" component={Explore} options={{}} />
      <Tab.Screen name="Messages" component={AllMessages} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const MainStack = createNativeStackNavigator();
function MainStackScreen() {
  return (
    <MainStack.Navigator
      screenOptions={{
        ...Styles.Header,
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Home" component={HomeTabScreen} />
      <MainStack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: true }}
      />
    </MainStack.Navigator>
  );
}

const AppStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Group>
          <AppStack.Screen name="Main" component={MainStackScreen} />
        </AppStack.Group>
        <AppStack.Group screenOptions={{ presentation: "modal" }}>
          <AppStack.Screen name="UserProfile" component={UserProfile} />
        </AppStack.Group>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
