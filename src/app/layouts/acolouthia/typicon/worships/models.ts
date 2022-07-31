export enum Doer {
  Иерей,
  Чтец,
  Хор,
}

export enum ReplicaType {
  'начальный возглас',
  'отпуст',
}

export type Replica = {
  doer: Doer;
  type?: ReplicaType;
  text: string;
  features?: string;
};
