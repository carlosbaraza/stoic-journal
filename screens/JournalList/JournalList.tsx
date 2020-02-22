import React from "react";
import styled from "styled-components/native";
import { theme } from "../../shared/theme";
import { useGlobalState } from "../../shared/context";
import { NavigationProp } from "@react-navigation/native";
import { ScreenContainer } from "../../components/ScreenContainer";
import { CalendarList, DateObject } from "react-native-calendars";
import moment from "moment";
import { useNavigationContext } from "../../shared/navigation-context";

type Props = {
  navigation: NavigationProp<{}>;
};

export const JournalList = (props: Props) => {
  const { entries } = useGlobalState();
  const navigation = useNavigationContext();
  const markedDates = entries
    .map(e => moment(e.date).format("YYYY-MM-DD"))
    .reduce((acc, date) => {
      acc[date] = { selected: true };
      return acc;
    }, {});

  const onPressDate = (day: DateObject) => {
    const entry = entries.find(e => moment(e.date).format("YYYY-MM-DD") === day.dateString);
    if (entry) {
      navigation.navigate("Edit journal", { id: entry.id });
    } else {
      navigation.navigate("New journal", { date: day });
    }
  };

  return (
    <ScreenContainer>
      <CalendarList
        pastScrollRange={24}
        futureScrollRange={0}
        scrollEnabled={true}
        theme={theme.calendar}
        onDayPress={onPressDate}
        maxDate={new Date()}
        markedDates={markedDates}
      />
    </ScreenContainer>
  );
};
