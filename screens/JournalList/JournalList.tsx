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
  background-color: ${theme.color.background};
`;

const InnerContainer = styled.View`
  flex: 1;
  padding: ${theme.space.l};
  overflow: visible;
`;

type Props = {
  navigation: NavigationProp<{}>;
};

export const JournalList = (props: Props) => {
  const { entries } = useGlobalState();

  return (
    <ScreenContainer>
      <ScrollContainer>
        <InnerContainer>
          {entries.map((entry, i) => (
            <JournalEntry key={entry.id} entry={entry} isFirstChild={i === 0} />
          ))}
        </InnerContainer>
      </ScrollContainer>
    </ScreenContainer>
  );
};
