import React from "react";
import styled from "styled-components/native";
import { theme } from "../shared/theme";
import { Heading } from "./Heading";
import { Question as QuestionType } from "../types";
import { Text } from "react-native";

const Container = styled.View<{ isFirstChild: boolean }>`
  margin-top: ${({ isFirstChild }) => (isFirstChild ? 0 : theme.space.l)};
`;

const TextInput = styled.TextInput`
  margin-top: ${theme.space.s};
  font-family: ${theme.font.sans};
  font-size: 16px;
  line-height: 24px;
`;

type Props = {
  question: QuestionType;
  childIndex?: number;
  onChangeText(text: string): void;
  value: string;
};

export const Question = (props: Props) => {
  const { question } = props;
  return (
    <Container isFirstChild={props.childIndex === 0}>
      <Heading>{question.text}</Heading>
      <TextInput
        placeholder={question.placeholder}
        multiline
        value={props.value}
        placeholderTextColor={theme.color.placeholder}
        onChangeText={props.onChangeText}
      />
    </Container>
  );
};
