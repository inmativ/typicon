import { IOldDate } from '@utils';

import { TypikonSign } from './typikon-sign.model';

export type Day = {
  memories: Memory[];
};

export type Affection = {
  check: (date: IOldDate) => boolean;
  affect: (memory: Memory) => unknown
};

export type Memory = {
  description: string;
  affection?: Affection;
  service?: Service;
};

export type Service = {
  instructions: string;
  typikonSign: TypikonSign;
};