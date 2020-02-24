import { Dispatch } from "./../context-types";
import { loadQuestions } from "./load-questions";
import { loadEntries } from "./load-entries";

export async function startupLoad(dispatch: Dispatch) {
  loadQuestions(dispatch);
  loadEntries(dispatch);
}
