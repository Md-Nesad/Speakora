import { Topic } from "../types/grammerTypes";

export const grammarData: Topic[] = [
  {
    id: "sentence-structure",
    title: "Sentence Structure",
    children: [
      { id: "basic-sentence", title: "Basic Sentence Structure" },
      { id: "simple-sentence", title: "Simple Sentence" },
      { id: "compound-sentence", title: "Compound Sentence" },
      { id: "complex-sentence", title: "Complex Sentence" },
    ],
  },
  {
    id: "parts-of-speech",
    title: "Parts of Speech",
    children: [
      { id: "noun", title: "Noun" },
      { id: "verb", title: "Verb" },
      { id: "adjective", title: "Adjective" },
      { id: "adverb", title: "Adverb" },
      { id: "preposition", title: "Preposition" },
      { id: "conjunction", title: "Conjunction" },
    ],
  },
  {
    id: "articles",
    title: "Articles",
    children: [
      { id: "a-an", title: "A / An" },
      { id: "the", title: "The (Definite Article)" },
      { id: "article-rules", title: "Rules of Articles" },
    ],
  },
  {
    id: "prepositions",
    title: "Prepositions",
    children: [
      { id: "time", title: "Prepositions of Time" },
      { id: "place", title: "Prepositions of Place" },
      { id: "movement", title: "Prepositions of Movement" },
    ],
  },
  {
    id: "tense",
    title: "Tenses",
    children: [
      { id: "present-simple", title: "Present Simple Tense" },
      { id: "present-continuous", title: "Present Continuous Tense" },
      { id: "present-perfect", title: "Present Perfect Tense" },
      { id: "past-simple", title: "Past Simple Tense" },
      { id: "past-continuous", title: "Past Continuous Tense" },
      { id: "future-simple", title: "Future Simple Tense" },
    ],
  },
  {
    id: "right-form-of-verb",
    title: "Right Form of Verbs",
    children: [
      { id: "subject-verb-agreement", title: "Subject-Verb Agreement" },
      { id: "verb-tenses", title: "Verb Tense Rules" },
      { id: "irregular-verbs", title: "Irregular Verbs" },
    ],
  },
  {
    id: "modals",
    title: "Modal Verbs",
    children: [
      { id: "can-could", title: "Can / Could" },
      { id: "may-might", title: "May / Might" },
      { id: "must-have-to", title: "Must / Have to" },
      { id: "should", title: "Should / Ought to" },
    ],
  },
  {
    id: "question-making",
    title: "Question Formation",
    children: [
      { id: "wh-questions", title: "WH Questions" },
      { id: "yes-no", title: "Yes / No Questions" },
      { id: "tag-questions", title: "Tag Questions" },
    ],
  },
];
