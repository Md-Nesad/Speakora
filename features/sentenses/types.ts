export type SentenceItem = {
  id: string;
  en: string;
  bn: string;
};

export type StructureType = "can" | "could";

export type SentenceStructure = {
  title: string;
  description: string;
  examples: SentenceItem[];
};

export type SentenceData = Record<StructureType, SentenceStructure>;
