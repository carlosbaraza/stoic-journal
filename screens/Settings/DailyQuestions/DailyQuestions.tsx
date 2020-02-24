import React, { useState } from "react";
import { Question } from "../../../components/Question";
import { SaveButton } from "../../../components/SaveButton";
import { ScreenContainer } from "../../../components/ScreenContainer";
import styled from "styled-components/native";
import { theme } from "../../../shared/theme";
import { useGlobalState } from "../../../shared/context";
import { useNavigationContext, RouteParams } from "../../../shared/navigation-context";
import { RouteProp } from "@react-navigation/native";
import { useSaveEntry } from "../../../shared/actions/save-entry";
import { DateObject } from "react-native-calendars";
import { INITIAL_QUESTIONS } from "../../../shared/init-questions";
import { uuid } from "uuidv4";
import { View } from "react-native";
import { QuestionList } from "../../../components/settings/QuestionList";
import { FlatListButton } from "../../../components/FlatListButton";

const ScrollView = styled.ScrollView`
  background-color: ${theme.color.background};
`;

const Container = styled.View`
  flex: 1;
  padding: ${theme.space.l};
  background-color: ${theme.color.background};
`;

const FooterContainer = styled.View`
  flex: 0;
  padding: ${theme.space.l};
`;

const styles = {
  container: {
    minHeight: "100%"
  }
};

type Props = {
  route: RouteProp<
    { "Settings - Daily questions": RouteParams["Settings - Daily questions"] },
    "Settings - Daily questions"
  >;
};

export function DailyQuestions(props: Props) {
  const state = useGlobalState();
  const navigation = useNavigationContext();

  const { questions } = state;

  return (
    <ScreenContainer>
      <ScrollView>
        {questions.map((question, i) => (
          <FlatListButton
            title={question.text}
            key={i}
            onPress={() =>
              navigation.navigate("Settings - Edit daily question", { id: question.id })
            }
          />
        ))}
      </ScrollView>
    </ScreenContainer>
  );
}
