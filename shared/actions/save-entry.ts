import { useGlobalState } from "./../context";
import { Dispatch, State } from "./../context-types";
import { store } from "./../store";
import { JournalEntry } from "./../../types";
import { useGlobalDispatch } from "../context";

export const useSaveEntry = (): { (entry: JournalEntry): Promise<void> } => {
  const dispatch = useGlobalDispatch();
  const state = useGlobalState();
  return saveEntry.bind(null, dispatch, state);
};

async function saveEntry(dispatch: Dispatch, state: State, entry: JournalEntry) {
  const key = `entry-${entry.id}`;
  const existingEntry = await store.get(key);
  await store.save(key, entry);

  let entries;
  if (existingEntry) {
    entries = state.entries.map(e => {
      if (e.id === entry.id) {
        return entry;
      } else {
        return e;
      }
    });
  } else {
    entries = [...state.entries, entry];
  }

  dispatch({ type: "RECEIVE_ENTRIES", entries });
}
