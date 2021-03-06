export type Question = {
  id: string;
  text: string;
  placeholder: string;
};

export type JournalEntry = {
  id: string;
  date: Date;
  answers: JournalEntryAnswer[];
};

export type JournalEntryAnswer = {
  question: Question;
  answer: string;
};
