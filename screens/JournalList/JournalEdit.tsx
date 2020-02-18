import React, { useState } from "react";
import { Alert } from "react-native";
import { Question as QuestionType } from "../../types";
import { Question } from "../../components/Question";
import { SaveButton } from "../../components/SaveButton";
import { ScreenContainer } from "../../components/ScreenContainer";
import styled from "styled-components/native";
import { theme } from "../../shared/theme";
import { useGlobalDispatch, useGlobalState } from "../../shared/context";
import { uuid } from "uuidv4";
import { useNavigationContext } from "./navigation-context";
import { RouteProp } from "@react-navigation/native";

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

type Props = { route: RouteProp<{ "Edit journal": { id: string } }, "Edit journal"> };

export function JournalEdit(props: Props) {
  const dispatch = useGlobalDispatch();
  const navigation = useNavigationContext();
  const state = useGlobalState();
  const id = props.route.params.id;
  const entry = state.entries.find(e => e.id === id);

  const [answers, setAnswers] = useState(entry.answers.map(a => a.answer));
  const questions = entry.answers.map(a => a.question);

  const onSave = () => {
    const journalAnswers = questions.map((question, i) => ({ question, answer: answers[i] }));
    dispatch({
      type: "SAVE_JOURNAL",
      journal: { answers: journalAnswers, id, date: new Date() }
    });
  };

  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.container}>
        <Container>
          {questions.map((question, i) => (
            <Question
              key={i}
              question={question}
              childIndex={i}
              value={answers[i]}
              onChangeText={text => {
                answers[i] = text;
                setAnswers([...answers]);
              }}
            />
          ))}
        </Container>
        <FooterContainer>
          <SaveButton onPress={onSave} />
        </FooterContainer>
      </ScrollView>
    </ScreenContainer>
  );
}
