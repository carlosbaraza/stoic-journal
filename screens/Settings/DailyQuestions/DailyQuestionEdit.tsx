import React, { useState } from "react";
import { Question } from "../../../components/Question";
import { SaveButton } from "../../../components/SaveButton";
import { ScreenContainer } from "../../../components/ScreenContainer";
import styled from "styled-components/native";
import { theme } from "../../../shared/theme";
import { useGlobalState } from "../../../shared/context";
import { useNavigationContext, RouteParams, NavigationP } from "../../../shared/navigation-context";
import { RouteProp } from "@react-navigation/native";
import { useSaveQuestion } from "../../../shared/actions/save-question";

const Container = styled.View`
  flex: 1;
  padding: ${theme.space.l};
  background-color: ${theme.color.background};
`;

const Input = styled.TextInput`
  margin-top: ${theme.space.s};
  font-family: ${theme.font.sans};
  font-size: 16px;
  line-height: 24px;
`;

const FooterContainer = styled.View`
  flex: 0;
  min-height: 130px;
  padding: ${theme.space.l};
  background-color: ${theme.color.background};
`;

const styles = {
  container: {
    minHeight: "100%"
  }
};

type Props = {
  route: RouteProp<
    { "Settings - Edit daily question": RouteParams["Settings - Edit daily question"] },
    "Settings - Edit daily question"
  >;
  navigation: NavigationP;
};

export function DailyQuestionEdit(props: Props) {
  const state = useGlobalState();
  const navigation = props.navigation;
  const saveQuestion = useSaveQuestion();

  const { questions } = state;
  const question = questions.find(q => q.id === props.route.params.id);

  const [questionText, setQuestionText] = useState(question.text);
  const saveDisabled = questionText === question.text;

  const onSave = async () => {
    const newQuestion = { ...question, text: questionText };
    await saveQuestion(newQuestion);
    navigation.navigate("Settings - Daily questions");
  };

  return (
    <ScreenContainer>
      <Container>
        <Input
          placeholder={"Write a question"}
          multiline
          value={questionText}
          placeholderTextColor={theme.color.placeholder}
          onChangeText={text => setQuestionText(text)}
        />
      </Container>
      <FooterContainer>
        <SaveButton onPress={onSave} disabled={saveDisabled} />
      </FooterContainer>
    </ScreenContainer>
  );
}
