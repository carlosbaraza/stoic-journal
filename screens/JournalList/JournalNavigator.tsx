import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { JournalList } from "./JournalList";
import { theme } from "../../shared/theme";
import { JournalEdit } from "./JournalEdit";
import { RouteParams } from "../../shared/navigation-context";
import { JournalNew } from "./JournalNew";

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
      <Stack.Screen name="New journal" component={JournalNew} />
    </Stack.Navigator>
  );
};
