import React from "react";
import styled from "styled-components/native";
import { JournalEntry as JournalEntryType } from "../types";

const Container = styled.View`
  flex: 1;
`;

const Title = styled.Text``;

type Props = {
  entry: JournalEntryType;
};

export const JournalEntry = (props: Props) => {
  const { entry } = props;
  return (
    <Container>
      <Title>{entry.date.toLocaleDateString("en-US")}</Title>
    </Container>
  );
};
