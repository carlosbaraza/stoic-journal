import React from "react";
import styled from "styled-components/native";
import { theme } from "../shared/theme";
import { TouchableOpacity, Platform, TouchableNativeFeedback } from "react-native";

const View = styled.View`
  flex: 1;
  background-color: ${theme.color.button};
  padding: ${theme.space.m};
  border: none;
  border-radius: ${theme.space.m};
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 700;
`;

type Props = {
  onPress(): void;
};

export const SaveButton = (props: Props) => {
  const Touchable: any = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Touchable onPress={props.onPress}>
      <View>
        <Text>Save journal</Text>
      </View>
    </Touchable>
  );
};
