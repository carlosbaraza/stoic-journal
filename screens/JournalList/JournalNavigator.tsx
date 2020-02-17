import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { JournalList } from "./JournalList";
import { theme } from "../../shared/theme";
import { JournalEdit } from "./JournalEdit";
import { withNavigationContext } from "./navigation-context";

export type JournalStackRouteParams = { "Edit journal": { id: string }; "Journal entries": {} };
const Stack = createStackNavigator<JournalStackRouteParams>();

type Props = {};

export const JournalNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: { backgroundColor: theme.color.background },
        headerTitleStyle: { fontFamily: theme.font.serifBold },
        headerBackTitle: "Back",
        animationEnabled: true
      }}
      mode="card"
    >
      <Stack.Screen name="Journal entries" component={withNavigationContext(JournalList)} />
      <Stack.Screen name="Edit journal" component={withNavigationContext(JournalEdit)} />
    </Stack.Navigator>
  );
};
