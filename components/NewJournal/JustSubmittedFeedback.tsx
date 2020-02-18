import React from "react";
import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";
import { theme } from "../../shared/theme";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.background};
`;

const Image = styled.Image`
  width: 200px;
  height: 258px;
`;

const Text = styled.Text`
  font-size: 20px;
  font-family: ${theme.font.serifBold};
  margin-top: ${theme.space.l};
`;

const Subtitle = styled.Text`
  font-size: 14px;
  font-family: ${theme.font.sans};
  color: ${theme.color.color7};
  margin-top: ${theme.space.m};
  width: 300px;
  text-align: center;
`;

type Props = {};

export const JustSubmittedFeedback = (props: Props) => {
  return (
    <Container>
      <Animatable.View animation="zoomInUp">
        <Image source={require("../../assets/images/chrysippos-smiling-transparent-1000px.png")} />
      </Animatable.View>
      <Animatable.View animation="zoomInUp">
        <Text>Good job Chrysippos Junior</Text>
        <Subtitle>You can edit your journal entry in the bottom Journal calendar tab</Subtitle>
      </Animatable.View>
    </Container>
  );
};
