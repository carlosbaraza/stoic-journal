import React from "react";
import styled from "styled-components/native";
import { Touchable } from "./Touchable";
import { theme } from "../shared/theme";

const Container = styled.View`
  flex: 1;
  padding: ${theme.space.l};
  background-color: ${theme.color.flatListButtonBackground};
  border: 1px solid ${theme.color.flatListButtonBorder};
  margin-top: ${theme.space.m};
`;

const Text = styled.Text`
  font-size: 16px;
`;

type Props = { title: string; onPress(): void };

export const FlatListButton = (props: Props) => {
  return (
    <Touchable onPress={props.onPress}>
      <Container>
        <Text>{props.title}</Text>
      </Container>
    </Touchable>
  );
};
