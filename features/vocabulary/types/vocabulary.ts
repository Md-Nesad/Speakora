export type PracticeType = {
  speak?: boolean;
  fill_blank?: boolean;
  make_sentence?: boolean;
  listen_repeat?: boolean;
};

export type WordItem = {
  id: string;
  word: string;

  meaning_en: string;
  meaning_bn: string;

  sentence_en: string;
  sentence_bd: string;

  category: string; // ⭐ NEW

  practice?: PracticeType; // ⭐ NEW
};

export type VocabularyGroup = {
  letter: string;
  words: WordItem[];
};
