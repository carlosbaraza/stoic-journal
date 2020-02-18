import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { KeyboardAvoidingViewProps, Platform } from "react-native";

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

type Props = KeyboardAvoidingViewProps & { children: ReactNode };

export const ScreenContainer = (props: Props) => {
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "android" ? "height" : "position"}
      style={{ flex: 1 }}
      {...props}
    >
      {props.children}
    </KeyboardAvoidingView>
  );
};
