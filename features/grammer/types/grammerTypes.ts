export type SubTopic = {
  id: string;
  title: string;
};

export type Topic = {
  id: string;
  title: string;
  children: SubTopic[];
};
