import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { JournalList } from "./JournalList";
import { theme } from "../../shared/theme";
import { JournalEdit } from "./JournalEdit";
import { RouteParams } from "../../context/navigation";

const Stack = createStackNavigator<RouteParams>();

type Props = {};

export const JournalNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: { backgroundColor: theme.color.topbar.background },
        headerTitleStyle: { fontFamily: theme.font.serifBold, color: theme.color.topbar.color },
        headerBackTitle: "Back",
        animationEnabled: true
      }}
      mode="card"
    >
      <Stack.Screen name="Journal entries" component={JournalList} />
      <Stack.Screen name="Edit journal" component={JournalEdit} />
    </Stack.Navigator>
  );
};
