import React from "react";
import styled from "styled-components/native";
import { Touchable } from "./Touchable";
import { theme } from "../shared/theme";
import { JournalEntry as JournalEntryType } from "../types";
import moment from "moment";
import { useNavigationContext } from "../screens/JournalList/navigation-context";
import { Image, ImageBackground } from "react-native";

const Container = styled.View<{ isFirstChild: boolean }>`
  flex: 1;
  background-color: ${theme.color.flatListButtonBackground};
  border: 1px solid ${theme.color.flatListButtonBorder};
  margin-top: ${p => (p.isFirstChild ? 0 : theme.space.m)};
  border-radius: ${theme.space.s};
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  overflow: visible;
  elevation: 2;
`;

const Background = styled.ImageBackground`
  padding: ${theme.space.l};
  width: 100%;
  height: 100%;
`;

const Text = styled.Text`
  font-size: 16px;
  font-family: ${theme.font.serifItalic};
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
        <Background source={require("../assets/images/paper-texture.png")}>
          <Text>{printedDate}</Text>
        </Background>
      </Container>
    </Touchable>
  );
};
