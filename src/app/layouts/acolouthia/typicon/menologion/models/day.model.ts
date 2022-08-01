import { IOldDate } from '@utils';

import { TypikonSign } from './typikon-sign.model';
import { Worship } from './worship.model';

export type Day = {
  memories: Memory[];
};

export type Affection = {
  check: (date: IOldDate) => boolean;
  affect: (memory: Memory) => Worship
};

export type Memory = {
  description?: string;
  affection?: Affection;
  service?: Service;
  new(): Worship
} | {
  description?: string;
  affection?: Affection;
  service?: Service;
};

export type Service = {
  instructions: string;
  typikonSign: TypikonSign;
};
