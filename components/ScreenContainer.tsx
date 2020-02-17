import React from "react";
import styled from "styled-components/native";
import { KeyboardAvoidingViewProps } from "react-native";

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

type Props = KeyboardAvoidingViewProps;

export const ScreenContainer = (props: Props) => {
  return <KeyboardAvoidingView enabled behavior="padding" {...props} />;
};
