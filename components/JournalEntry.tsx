import React from "react";
import styled from "styled-components/native";
import { Touchable } from "./Touchable";
import { theme } from "../shared/theme";
import { JournalEntry as JournalEntryType } from "../types";
import moment from "moment";

const Container = styled.View`
  flex: 1;
  padding: ${theme.space.l};
  background-color: ${theme.color.flatListButtonBackground};
  border: 1px solid ${theme.color.flatListButtonBorder};
  margin-top: ${theme.space.m};
  border-radius: ${theme.space.m};
`;

const Text = styled.Text`
  font-size: 16px;
`;

type Props = { entry: JournalEntryType };

export const JournalEntry = (props: Props) => {
  const { entry } = props;
  const date = moment(new Date(entry.date));
  const printedDate = date.format("MMMM Do, YYYY");

  return (
    <Touchable onPress={() => {}}>
      <Container>
        <Text>{printedDate}</Text>
      </Container>
    </Touchable>
  );
};
