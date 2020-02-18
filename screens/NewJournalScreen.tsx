import React, { useState } from "react";
import { Alert } from "react-native";
import { Question as QuestionType } from "../types";
import { Question } from "../components/Question";
import { SaveButton } from "../components/SaveButton";
import { ScreenContainer } from "../components/ScreenContainer";
import styled from "styled-components/native";
import { theme } from "../shared/theme";
import { useGlobalDispatch } from "../shared/context";
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

  const [answers, setAnswers] = useState(questions.map(() => ""));

  const onSave = () => {
    const journalAnswers = questions.map((question, i) => ({ question, answer: answers[i] }));
    dispatch({
      type: "SAVE_JOURNAL",
      journal: { answers: journalAnswers, id: uuid(), date: new Date() }
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
