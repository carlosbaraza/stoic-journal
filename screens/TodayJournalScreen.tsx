import React, { useState, useMemo } from "react";
import { Alert } from "react-native";
import { Question } from "../components/Question";
import { SaveButton } from "../components/SaveButton";
import { ScreenContainer } from "../components/ScreenContainer";
import styled from "styled-components/native";
import { theme } from "../shared/theme";
import { useGlobalDispatch, useGlobalState } from "../shared/context";
import { useSaveEntry } from "../shared/actions/save-entry";
import { uuid } from "uuidv4";
import moment from "moment";
import { JustSubmittedFeedback } from "../components/NewJournal/JustSubmittedFeedback";
import { AlreadyExistingEntry } from "../components/NewJournal/AlreadyExistingEntry";
import useAppState from "react-native-appstate-hook";
import { INITIAL_QUESTIONS } from "../shared/questions";

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

export function TodayJournalScreen() {
  const state = useGlobalState();
  const saveEntry = useSaveEntry();
  const [answers, setAnswers] = useState(INITIAL_QUESTIONS.map(() => ""));
  const [hasJustSubmitted, setHasJustSubmitted] = useState(false);
  const appState = useAppState({ onChange: () => setHasJustSubmitted(false) });
  const alreadyExistingEntry = useMemo(() => {
    return state.entries.find(e => moment(e.date).isSame(moment(), "day"));
  }, [state.entries, appState]);

  const onSave = async () => {
    const journalAnswers = INITIAL_QUESTIONS.map((question, i) => ({
      question,
      answer: answers[i]
    }));
    const entry = { answers: journalAnswers, id: uuid(), date: new Date() };
    await saveEntry(entry);
    setHasJustSubmitted(true);
  };

  if (hasJustSubmitted) {
    return <JustSubmittedFeedback />;
  }

  if (alreadyExistingEntry) {
    return <AlreadyExistingEntry entry={alreadyExistingEntry} />;
  }

  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.container}>
        <Container>
          {INITIAL_QUESTIONS.map((question, i) => (
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
