import { Question } from "../../types";
import { store } from "../store";

export async function saveQuestionNoDispatch(
  question: Question
): Promise<{ storageAction: "update" | "insert" }> {
  const key = `question-${question.id}`;
  const existingQuestion = await store.get(key);
  await store.save(key, question);

  if (existingQuestion) return { storageAction: "update" };
  return { storageAction: "insert" };
}
