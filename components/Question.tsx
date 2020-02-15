import React from "react";
import styled from "styled-components/native";
import { theme } from "../shared/theme";
import { Heading } from "./Heading";
import { Question as QuestionType } from "../types";

const Container = styled.View`
  margin-top: ${theme.space.l};
`;

const TextInput = styled.TextInput`
  margin-top: ${theme.space.s};
`;

type Props = {
  question: QuestionType;
};

export const Question = (props: Props) => {
  const { question } = props;
  return (
    <Container>
      <Heading>{question.text}</Heading>
      <TextInput
        placeholder={question.placeholder}
        multiline
        placeholderTextColor={theme.color.placeholder}
      />
    </Container>
  );
};
