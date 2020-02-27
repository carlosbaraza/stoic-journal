import { Dispatch } from "../context-types";
import { store } from "../store";
import { Question } from "../../types";
import { INITIAL_QUESTIONS } from "../init-questions";
import { saveQuestionNoDispatch } from "../services/questions";

export async function loadQuestions(dispatch: Dispatch) {
  const questionIds = await store.get("question-ids");

  if (questionIds) {
    const keys = questionIds.map(id => `question-${id}`);
    const questions: Question[] = await store.get(keys);
    dispatch({ type: "RECEIVE_QUESTIONS", questions });
  } else {
    await initQuestions(dispatch);
  }
}

// Add questions to database
async function initQuestions(dispatch: Dispatch) {
  await Promise.all(INITIAL_QUESTIONS.map(question => saveQuestionNoDispatch(question)));
  await store.save(
    "question-ids",
    INITIAL_QUESTIONS.map(q => q.id)
  );
  dispatch({ type: "RECEIVE_QUESTIONS", questions: INITIAL_QUESTIONS });
}
