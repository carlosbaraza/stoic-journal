import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

type Props = {};

export const QuestionList = (props: Props) => {
  return <Container>{questions}</Container>;
};
