import { Dispatch } from "../context-types";
import { store } from "../store";
import { Question } from "../../types";
import { INITIAL_QUESTIONS } from "../init-questions";
import { saveQuestionNoDispatch } from "../services/questions";

export async function loadQuestions(dispatch: Dispatch) {
  const areQuestionsInit = await store.get("questions-init");

  if (areQuestionsInit) {
    const keys = await store.keys();
    const dailyQuestionKeys = keys.filter(e => e.includes("question-"));
    const questions: Question[] = await store.get(dailyQuestionKeys);
    dispatch({ type: "RECEIVE_QUESTIONS", questions });
  } else {
    await initQuestions(dispatch);
  }
}

// Add questions to database
async function initQuestions(dispatch: Dispatch) {
  await Promise.all(INITIAL_QUESTIONS.map(question => saveQuestionNoDispatch(question)));
  await store.save("questions-init", true);
  dispatch({ type: "RECEIVE_QUESTIONS", questions: INITIAL_QUESTIONS });
}
