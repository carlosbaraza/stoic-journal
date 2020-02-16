import React from "react";
import styled from "styled-components/native";
import { theme } from "../shared/theme";
import { Heading } from "./Heading";
import { Question as QuestionType } from "../types";

const Container = styled.View<{ isFirstChild: boolean }>`
  margin-top: ${({ isFirstChild }) => (isFirstChild ? 0 : theme.space.l)};
`;

const TextInput = styled.TextInput`
  margin-top: ${theme.space.s};
`;

type Props = {
  question: QuestionType;
  childIndex?: number;
};

export const Question = (props: Props) => {
  const { question } = props;
  return (
    <Container isFirstChild={props.childIndex === 0}>
      <Heading>{question.text}</Heading>
      <TextInput
        placeholder={question.placeholder}
        multiline
        placeholderTextColor={theme.color.placeholder}
      />
    </Container>
  );
};
