import { Dispatch, State } from "../context-types";
import { store } from "../store";
import { Question } from "../../types";
import { useGlobalDispatch, useGlobalState } from "../context";
import { saveQuestionNoDispatch } from "../services/questions";

export const useSaveQuestion = (): { (question: Question): Promise<void> } => {
  const dispatch = useGlobalDispatch();
  const state = useGlobalState();
  return saveQuestion.bind(null, dispatch, state);
};

async function saveQuestion(dispatch: Dispatch, state: State, question: Question) {
  const { storageAction } = await saveQuestionNoDispatch(question);

  let questions;
  if (storageAction === "update") {
    questions = state.questions.map(e => {
      if (e.id === question.id) {
        return question;
      } else {
        return e;
      }
    });
  } else {
    questions = [...state.questions, question];
  }

  dispatch({ type: "RECEIVE_QUESTIONS", questions });
}
