import * as React from "react";
import { JournalEntry } from "../types";
import { AsyncStorage } from "react-native";
import { loadEntries } from "./actions/load-entries";

type Action =
  | { type: "SET_STATE"; state: State }
  | { type: "RECEIVE_ENTRIES"; entries: JournalEntry[] }
  | { type: "FACTORY_RESET" };
export type Dispatch = (action: Action) => void;
export type State = { entries: JournalEntry[] };
type GlobalProviderProps = { children: React.ReactNode };

const GlobalStateContext = React.createContext<State | undefined>(undefined);
const GlobalDispatchContext = React.createContext<Dispatch | undefined>(undefined);

export const INITIAL_STATE = { entries: [] };

function globalReducer(state: State, action: Action): State {
  switch (action.type) {
    case "RECEIVE_ENTRIES": {
      return { ...state, entries: action.entries };
    }
    case "SET_STATE": {
      return action.state;
    }
    case "FACTORY_RESET": {
      return INITIAL_STATE;
    }
  }
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [state, dispatch] = React.useReducer(globalReducer, INITIAL_STATE);

  React.useEffect(() => {
    loadEntries(dispatch);
  }, []);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  const context = React.useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return context;
}

export function useGlobalDispatch() {
  const context = React.useContext(GlobalDispatchContext);
  if (context === undefined) {
    throw new Error("useGlobalDispatch must be used within a GlobalProvider");
  }
  return context;
}
