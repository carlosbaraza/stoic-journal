import React from "react";
import styled from "styled-components/native";
import { Touchable } from "./Touchable";
import { theme } from "../shared/theme";
import { JournalEntry as JournalEntryType } from "../types";
import moment from "moment";
import { useNavigationContext } from "../screens/JournalList/navigation-context";

const Container = styled.View<{ isFirstChild: boolean }>`
  flex: 1;
  padding: ${theme.space.l};
  background-color: ${theme.color.flatListButtonBackground};
  border: 1px solid ${theme.color.flatListButtonBorder};
  margin-top: ${p => (p.isFirstChild ? 0 : theme.space.m)};
  border-radius: ${theme.space.m};
`;

const Text = styled.Text`
  font-size: 16px;
`;

type Props = { entry: JournalEntryType; isFirstChild: boolean };

export const JournalEntry = (props: Props) => {
  const navigation = useNavigationContext();
  const { entry } = props;
  const date = moment(new Date(entry.date));
  const printedDate = date.format("MMMM Do, YYYY");

  return (
    <Touchable onPress={() => navigation.navigate("Edit journal", { id: entry.id })}>
      <Container isFirstChild={props.isFirstChild}>
        <Text>{printedDate}</Text>
      </Container>
    </Touchable>
  );
};
