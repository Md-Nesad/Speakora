export type WordItem = {
  id: string;
  word: string;
  meaning_en: string;
  meaning_bn: string;
  sentence_en: string;
  sentence_bd: string;
};

export type VocabularyGroup = {
  letter: string;
  words: WordItem[];
};
