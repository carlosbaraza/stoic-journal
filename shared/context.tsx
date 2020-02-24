import * as React from "react";
import { JournalEntry, Question } from "../types";
import { loadEntries } from "./actions/load-entries";
import { loadQuestions } from "./actions/load-questions";
import { startupLoad } from "./actions/startup-load";
import { State, Dispatch, Action, GlobalProviderProps } from "./context-types";

const GlobalStateContext = React.createContext<State | undefined>(undefined);
const GlobalDispatchContext = React.createContext<Dispatch | undefined>(undefined);

export const INITIAL_STATE = { entries: [], questions: [] };

function globalReducer(state: State, action: Action): State {
  switch (action.type) {
    case "RECEIVE_ENTRIES": {
      return { ...state, entries: action.entries };
    }
    case "RECEIVE_QUESTIONS": {
      return { ...state, questions: action.questions };
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
    startupLoad(dispatch);
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
