import React from "react";
import styled from "styled-components/native";
import { theme, statusBarHeight } from "../../shared/theme";
import { Heading } from "../../components/Heading";
import { FlatListButton } from "../../components/FlatListButton";
import { useGlobalDispatch } from "../../shared/context";
import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useNavigationContext } from "../../shared/navigation-context";
import { factoryReset } from "../../shared/actions/factory-reset";

const Container = styled.ScrollView`
  flex: 1;
  padding-top: ${theme.space.l};
  background-color: ${theme.color.background};
`;

const PaddedContainer = styled.View`
  padding-left: ${theme.space.l};
  padding-right: ${theme.space.l};
`;

const Section = styled.View<{ isFirstChild?: boolean }>`
  margin-top: ${p => (p.isFirstChild ? 0 : theme.space.l)};
`;

type Props = {};

export const Settings = (props: Props) => {
  const dispatch = useGlobalDispatch();
  const navigation = useNavigationContext();

  return (
    <Container>
      <Section isFirstChild>
        <PaddedContainer>
          <Heading>Questions</Heading>
        </PaddedContainer>
        <FlatListButton
          title="Change daily questions"
          onPress={() => {
            navigation.navigate("Settings - Daily questions");
          }}
        />
      </Section>
      <Section>
        <PaddedContainer>
          <Heading>Your data</Heading>
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
                { text: "Delete", onPress: () => factoryReset(dispatch) }
              ],
              { cancelable: false }
            );
          }}
        />
      </Section>
    </Container>
  );
};
