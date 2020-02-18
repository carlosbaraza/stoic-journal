import React from "react";
import styled from "styled-components/native";
import { theme, statusBarHeight } from "../shared/theme";
import { Heading } from "../components/Heading";
import { FlatListButton } from "../components/FlatListButton";
import { useGlobalDispatch } from "../shared/context";
import { Alert } from "react-native";

const Container = styled.ScrollView`
  flex: 1;
  padding-top: ${theme.space.l};
  background-color: ${theme.color.background};
`;

const PaddedContainer = styled.View`
  padding-left: ${theme.space.l};
  padding-right: ${theme.space.l};
`;

type Props = {};

export const SettingsScreen = (props: Props) => {
  const dispatch = useGlobalDispatch();

  return (
    <Container>
      <PaddedContainer>
        <Heading>Settings</Heading>
      </PaddedContainer>
      <FlatListButton
        title="Factory reset"
        onPress={() => {
          Alert.alert(
            "Factory reset",
            "Are you sure you want to delete all the data?",
            [
              {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
              },
              { text: "Delete", onPress: () => dispatch({ type: "FACTORY_RESET" }) }
            ],
            { cancelable: false }
          );
        }}
      />
    </Container>
  );
};
