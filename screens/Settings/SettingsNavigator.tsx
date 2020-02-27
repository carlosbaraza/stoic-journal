import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { theme } from "../../shared/theme";
import { RouteParams } from "../../shared/navigation-context";
import { Settings } from "./Settings";
import { DailyQuestionsNavigator } from "./DailyQuestions/DailyQuestionsNavigator";

const Stack = createStackNavigator<RouteParams>();

type Props = {};

export const SettingsNavigator = (props: Props) => {
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
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="Settings - Daily questions"
        component={DailyQuestionsNavigator}
        options={{ title: "Change questions" }}
      />
    </Stack.Navigator>
  );
};
