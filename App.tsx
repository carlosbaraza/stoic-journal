import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { theme } from "./shared/theme";
import { HomeScreen } from "./screens/HomeScreen";
import { NewJournalScreen } from "./screens/NewJournalScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { GlobalProvider } from "./shared/context";
import styled from "styled-components/native";

const TopSafeAreaPadding = styled.SafeAreaView`
  flex: 0;
  background-color: ${theme.color.background};
`;

const MainSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.color.navbarBackground};
`;

const Tab = createMaterialTopTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBarOptions={{
        tabStyle: {
          backgroundColor: theme.color.navbarBackground,
          borderTopColor: theme.color.navbarBorder
        },
        activeTintColor: "#000",
        showIcon: true,
        indicatorStyle: {
          height: 0
        }
      }}
    >
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
      <StatusBar hidden={false} />
      <TopSafeAreaPadding />
      <GlobalProvider>
        <NavigationContainer>
          <MainSafeArea>
            <BottomNavigator />
          </MainSafeArea>
        </NavigationContainer>
      </GlobalProvider>
    </>
  );
}
