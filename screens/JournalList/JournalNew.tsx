import React, { useState } from "react";
import { Question } from "../../components/Question";
import { SaveButton } from "../../components/SaveButton";
import { ScreenContainer } from "../../components/ScreenContainer";
import styled from "styled-components/native";
import { theme } from "../../shared/theme";
import { useGlobalState } from "../../shared/context";
import { useNavigationContext } from "../../shared/navigation-context";
import { RouteProp } from "@react-navigation/native";
import { useSaveEntry } from "../../shared/actions/save-entry";
import { DateObject } from "react-native-calendars";
import { uuid } from "uuidv4";

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

type Props = { route: RouteProp<{ "New journal": { date: DateObject } }, "New journal"> };

export function JournalNew(props: Props) {
  const saveEntry = useSaveEntry();
  const state = useGlobalState();
  const navigation = useNavigationContext();
  const date = props.route.params.date;

  const questions = state.questions;
  const [answers, setAnswers] = useState(questions.map(() => ""));

  const onSave = async () => {
    const journalAnswers = questions.map((question, i) => ({ question, answer: answers[i] }));
    const entry = { answers: journalAnswers, id: uuid(), date: new Date(date.dateString) };
    await saveEntry(entry);
    navigation.navigate("Journal entries");
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
