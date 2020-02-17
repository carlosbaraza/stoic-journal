import React from "react";
import styled from "styled-components/native";
import { theme } from "../../shared/theme";
import { useGlobalState } from "../../shared/context";
import { JournalEntry } from "../../components/JournalEntry";
import { NavigationProp } from "@react-navigation/native";
import { ScreenContainer } from "../../components/ScreenContainer";
import { View, Text } from "react-native";

const ScrollContainer = styled.ScrollView`
  flex: 1;
  padding: ${theme.space.l};
  background-color: ${theme.color.background};
`;

type Props = {
  navigation: NavigationProp<{}>;
};

export const JournalList = (props: Props) => {
  const { entries } = useGlobalState();

  return (
    <ScreenContainer>
      <ScrollContainer contentContainerStyle={{ paddingBottom: 64 }}>
        {entries.map((entry, i) => (
          <JournalEntry key={entry.id} entry={entry} isFirstChild={i === 0} />
        ))}
      </ScrollContainer>
    </ScreenContainer>
  );
};
