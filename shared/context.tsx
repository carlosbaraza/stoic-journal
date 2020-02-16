import * as React from "react";
import { JournalEntry } from "../types";
import { AsyncStorage } from "react-native";

type Action =
  | { type: "SAVE_JOURNAL"; journal: JournalEntry }
  | { type: "SET_STATE"; state: State }
  | { type: "FACTORY_RESET" };
type Dispatch = (action: Action) => void;
type State = { entries: JournalEntry[] };
type GlobalProviderProps = { children: React.ReactNode };

const GlobalStateContext = React.createContext<State | undefined>(undefined);
const GlobalDispatchContext = React.createContext<Dispatch | undefined>(undefined);

export const INITIAL_STATE = { entries: [] };

function globalReduderAsyncStorageWrapper(state: State, action: Action): State {
  const newState = globalReducer(state, action);
  if (action.type !== "SET_STATE") {
    AsyncStorage.setItem("global", JSON.stringify(newState));
  }
  return newState;
}

function globalReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SAVE_JOURNAL": {
      return { ...state, entries: [...state.entries, action.journal] };
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
  const [state, dispatch] = React.useReducer(globalReduderAsyncStorageWrapper, INITIAL_STATE);

  React.useEffect(() => {
    AsyncStorage.getItem("global").then(jsonState => {
      let initialState = JSON.parse(jsonState) || state;
      dispatch({ type: "SET_STATE", state: initialState });
    });
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
