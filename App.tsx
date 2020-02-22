import React from "react";
import { StatusBar, SafeAreaView, Text, Image, Platform } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { theme, statusBarHeight } from "./shared/theme";
import { JournalNavigator } from "./screens/JournalList/JournalNavigator";
import { TodayJournalScreen } from "./screens/TodayJournalScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { GlobalProvider } from "./shared/context";
import styled from "styled-components/native";
import { useAsyncAssets } from "./shared/assets";
import { withNavigationContext } from "./shared/navigation-context";

const TopSafeAreaPadding = styled.SafeAreaView`
  flex: 0;
  background-color: ${theme.color.topbar.background};
`;

const MainSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.color.navbarBackground};
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
          borderTopColor: theme.color.navbarBorder,
          borderTopWidth: 3
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
        name="Journal"
        component={withNavigationContext(JournalNavigator)}
        options={{
          tabBarLabel: "Journal",
          tabBarIcon: props => (
            <Entypo name="calendar" color={props.color} size={props.focused ? 24 : 20} />
          )
        }}
      />
      <Tab.Screen
        name="Today"
        component={withNavigationContext(TodayJournalScreen)}
        options={{
          tabBarLabel: "Today",
          tabBarIcon: props => (
            <Entypo name="new-message" color={props.color} size={props.focused ? 24 : 20} />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={withNavigationContext(SettingsScreen)}
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
      <MainSafeArea>
        <GlobalProvider>
          <NavigationContainer>
            <BottomNavigator />
          </NavigationContainer>
        </GlobalProvider>
      </MainSafeArea>
    </>
  );
}
