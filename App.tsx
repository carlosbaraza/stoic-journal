import React from "react";
import { StatusBar } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { theme } from "./shared/theme";
import { HomeScreen } from "./screens/HomeScreen";
import { NewJournalScreen } from "./screens/NewJournalScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { GlobalProvider } from "./shared/context";

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: theme.color.primary }}>
      <Tab.Screen
        name="History"
        component={HomeScreen}
        options={{
          tabBarIcon: props => (
            <Entypo name="calendar" color={props.color} size={props.focused ? 24 : 20} />
          )
        }}
      />
      <Tab.Screen
        name="New"
        component={NewJournalScreen}
        options={{
          tabBarIcon: props => (
            <Entypo name="new-message" color={props.color} size={props.focused ? 24 : 20} />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: props => (
            <AntDesign name="setting" color={props.color} size={props.focused ? 24 : 20} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <GlobalProvider>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </GlobalProvider>
    </>
  );
}
