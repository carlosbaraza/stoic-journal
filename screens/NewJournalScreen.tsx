import React, { useState, useMemo } from "react";
import { Alert } from "react-native";
import { Question as QuestionType } from "../types";
import { Question } from "../components/Question";
import { SaveButton } from "../components/SaveButton";
import { ScreenContainer } from "../components/ScreenContainer";
import styled from "styled-components/native";
import { theme } from "../shared/theme";
import { useGlobalDispatch, useGlobalState } from "../shared/context";
import { uuid } from "uuidv4";
import moment from "moment";
import { JustSubmittedFeedback } from "../components/NewJournal/JustSubmittedFeedback";
import { AlreadyExistingEntry } from "../components/NewJournal/AlreadyExistingEntry";
import useAppState from "react-native-appstate-hook";

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

const questions: QuestionType[] = [
  {
    text: "What did I do wrong?",
    placeholder: "Met Marco, but I was too caught in my own thoughts..."
  },
  {
    text: "What did I do right?",
    placeholder: "I was kind to that person that stepped on me in the tube..."
  },
  {
    text: "What could I have done differently?",
    placeholder: "I was lucky enough to meet Marco, and I should have been fully present..."
  },
  {
    text: "What am I grateful for?",
    placeholder: "Having the opportunity to work with such amazing people..."
  },
  {
    text: "What would make today great?",
    placeholder: "Meeting Marco again..."
  },
  {
    text: "What is my affirmation (mantra) for the day?",
    placeholder: "Focus and kindness"
  }
];

export function NewJournalScreen() {
  const dispatch = useGlobalDispatch();
  const state = useGlobalState();
  const [answers, setAnswers] = useState(questions.map(() => ""));
  const [hasJustSubmitted, setHasJustSubmitted] = useState(false);
  const appState = useAppState({ onChange: () => setHasJustSubmitted(false) });
  const alreadyExistingEntry = useMemo(() => {
    return state.entries.find(e => moment(e.date).isSame(moment(), "day"));
  }, [state.entries, appState]);

  const onSave = () => {
    const journalAnswers = questions.map((question, i) => ({ question, answer: answers[i] }));
    dispatch({
      type: "SAVE_JOURNAL",
      journal: { answers: journalAnswers, id: uuid(), date: new Date() }
    });
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
