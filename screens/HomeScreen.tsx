import React from "react";
import styled from "styled-components/native";
import { theme, paddingTop } from "../shared/theme";
import { Heading } from "../components/Heading";
import { StatusBar, Platform } from "react-native";

const Container = styled.View`
  flex: 1;
  padding: ${theme.space.l};
  padding-top: ${paddingTop};
  background-color: ${theme.color.background};
`;

type Props = {};

export const HomeScreen = (props: Props) => {
  return (
    <Container>
      <Heading>Hello</Heading>
    </Container>
  );
};
