import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { theme } from "../../../shared/theme";
import { RouteParams } from "../../../shared/navigation-context";
import { DailyQuestions } from "./DailyQuestions";
import { DailyQuestionEdit } from "./DailyQuestionEdit";

const Stack = createStackNavigator<RouteParams>();

type Props = {};

export const DailyQuestionsNavigator = (props: any) => {
  props.navigation.setOptions({ swipeEnabled: false });
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
      headerMode="none"
      initialRouteName="Settings - Daily questions"
    >
      <Stack.Screen
        name="Settings - Daily questions"
        component={DailyQuestions}
        options={{ title: "Daily questions" }}
      />
      <Stack.Screen name="Settings - Edit daily question" component={DailyQuestionEdit} />
    </Stack.Navigator>
  );
};
