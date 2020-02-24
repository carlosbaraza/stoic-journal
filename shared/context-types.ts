import { JournalEntry, Question } from "../types";

export type Action =
  | { type: "SET_STATE"; state: State }
  | { type: "RECEIVE_ENTRIES"; entries: JournalEntry[] }
  | { type: "RECEIVE_QUESTIONS"; questions: Question[] }
  | { type: "FACTORY_RESET" };
export type Dispatch = (action: Action) => void;
export type State = { entries: JournalEntry[]; questions: Question[] };
export type GlobalProviderProps = { children: React.ReactNode };
