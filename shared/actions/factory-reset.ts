import { Dispatch } from "./../context-types";
import { store } from "./../store";
import { startupLoad } from "./startup-load";

export async function factoryReset(dispatch: Dispatch) {
  const keys = await store.keys();
  await store.delete(keys);
  dispatch({ type: "FACTORY_RESET" });
  await startupLoad(dispatch);
}
