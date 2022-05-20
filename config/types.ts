export type TTask = {
  id: number;
  start: Date;
  end?: Date;
  title: string;
  body: Array<TUnit>;
  priority: 1 | 2 | 3;
  complete: boolean;
};

export type TUnit = {
  id: number;
  title: string;
  body: Array<string>;
  complete: boolean;
};
