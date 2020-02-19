import { Dispatch, State } from "./../context";
import { store } from "./../store";
import { JournalEntry } from "./../../types";

export async function loadEntries(dispatch: Dispatch) {
  const keys = await store.keys();
  const entryKeys = keys.filter(e => e.includes("entry-"));
  const entries = await store.get(entryKeys);
  dispatch({ type: "RECEIVE_ENTRIES", entries });
}
