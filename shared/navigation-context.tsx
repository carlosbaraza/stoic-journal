import React, { createContext, useContext } from "react";
import { NavigationProp } from "@react-navigation/native";
import { DateObject } from "react-native-calendars";

export type RouteParams = {
  "Edit journal": { id: string };
  "New journal": { date: DateObject };
  "Journal entries": {};
  Journal: {};
  Today: {};
  Settings: {};
  "Settings - Daily questions": {};
  "Settings - Edit daily question": { id: string };
  "Settings - New daily question": {};
};

export type NavigationP = NavigationProp<RouteParams>;
const Navigation = createContext<NavigationP>(null);

export const useNavigationContext = (): NavigationP => {
  return useContext(Navigation);
};

type NavigationProps = {
  navigation: NavigationP;
};

export const withNavigationContext = Component => {
  return (props: NavigationProps) => {
    return (
      <Navigation.Provider value={props.navigation}>
        <Component {...props} />
      </Navigation.Provider>
    );
  };
};
