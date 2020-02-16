import React from "react";
import styled from "styled-components/native";
import { theme, paddingTop } from "../shared/theme";
import { Heading } from "../components/Heading";
import { StatusBar, Platform, FlatList, View, Text } from "react-native";
import { useGlobalState } from "../shared/context";
import { JournalEntry } from "../components/JournalEntry";

const Container = styled.ScrollView`
  flex: 1;
  padding: ${theme.space.l};
  padding-top: ${paddingTop};
  background-color: ${theme.color.background};
`;

type Props = {};

export const HomeScreen = (props: Props) => {
  const { entries } = useGlobalState();
  console.log(entries);
  return (
    <Container>
      <Heading>Journal entries</Heading>
      {entries.map(entry => (
        <JournalEntry key={entry.id} entry={entry} />
      ))}
    </Container>
  );
};
