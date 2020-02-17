import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { theme } from "../shared/theme";

const Container = styled.View``;

const Text = styled.Text`
  font-size: 20px;
  font-family: ${theme.font.serifBold};
`;

type Props = {
  children: ReactNode;
};

export const Heading = (props: Props) => {
  return (
    <Container>
      <Text>{props.children}</Text>
    </Container>
  );
};
