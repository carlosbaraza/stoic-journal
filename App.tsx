import React from "react";
import { StatusBar, SafeAreaView, Text, Image } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { theme } from "./shared/theme";
import { HomeScreen } from "./screens/HomeScreen";
import { NewJournalScreen } from "./screens/NewJournalScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { GlobalProvider } from "./shared/context";
import styled from "styled-components/native";
import { useAsyncAssets } from "./shared/assets";

const TopSafeAreaPadding = styled.SafeAreaView`
  flex: 0;
  background-color: ${theme.color.background};
`;

const MainSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.color.navbarBackground};
`;

const ScreenContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

const LoadingContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.color.background};
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.Image`
  height: 100px;
  width: 90px;
`;

const Tab = createMaterialTopTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBarOptions={{
        tabStyle: {
          borderTopColor: theme.color.navbarBorder
        },
        iconStyle: {
          justifyContent: "center",
          alignItems: "center"
        },
        activeTintColor: "#000",
        showIcon: true,
        indicatorStyle: {
          height: 0
        },
        pressColor: theme.color.background,
        pressOpacity: 1,
        labelStyle: {
          textTransform: "none",
          fontFamily: theme.font.sansBold
        },
        style: {
          backgroundColor: theme.color.navbarBackground
        }
      }}
    >
      <Tab.Screen
        name="History"
        component={HomeScreen}
        options={{
          tabBarLabel: "History",
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
  const loading = useAsyncAssets();

  if (loading) {
    return (
      <>
        <StatusBar hidden={false} />

        <LoadingContainer>
          <LogoImage source={require("./assets/stoic-journal-icon-512w.png")} />
        </LoadingContainer>
      </>
    );
  }

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
