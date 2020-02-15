import React from "react";
import { StyleSheet, Text, Alert, View } from "react-native";
import styled from "styled-components/native";
import { Heading } from "./components/Heading";
import { theme } from "./shared/theme";
import { Question as QuestionType } from "./types";
import { Question } from "./components/Question";
import { SaveButton } from "./components/SaveButton";

const ScrollView = styled.ScrollView`
  background-color: ${theme.color.background};
`;

const Container = styled.View`
  flex: 1;
  padding: ${theme.space.l};
  padding-top: ${theme.space.xl};
  padding-bottom: 0;
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

export default function App() {
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
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Container>
        {questions.map((question, i) => (
          <Question key={i} question={question} />
        ))}
      </Container>
      <FooterContainer>
        <SaveButton onPress={() => Alert.alert("TODO: Saving journal")} />
      </FooterContainer>
    </ScrollView>
  );
}
