import React, { createContext, useContext } from "react";
import { NavigationProp } from "@react-navigation/native";

export type RouteParams = {
  "Edit journal": { id: string };
  "Journal entries": {};
  Journal: {};
  New: {};
  Settings: {};
};

type NavigationP = NavigationProp<RouteParams>;
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
