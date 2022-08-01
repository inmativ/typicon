import { ГЛАС } from '../octoechos/models';

export enum Doer {
  Духовенство,
  Иерей,
  Диакон,
  Чтец,
  Хор,
}

export type Replica = {
  title?: string;
  doer: Doer;
  глас?: ГЛАС;
  text: string;
  features?: string;
};
