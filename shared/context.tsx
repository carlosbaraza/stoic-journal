import * as React from "react";
import { JournalEntry } from "../types";

type Action = { type: "SAVE_JOURNAL"; journal: JournalEntry };
type Dispatch = (action: Action) => void;
type State = { entries: JournalEntry[] };
type GlobalProviderProps = { children: React.ReactNode };

const GlobalStateContext = React.createContext<State | undefined>(undefined);
const GlobalDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function globalReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SAVE_JOURNAL": {
      return { ...state, entries: [...state.entries, action.journal] };
    }
  }
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [state, dispatch] = React.useReducer(globalReducer, { entries: [] });
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
