import { IOldDate } from '@utils';

import { MenaionWorship } from '../../menaion/models';
import { TypikonSign } from './typikon-sign.model';

export type Day = {
  memories: Memory[];
};

export type Affection = {
  check: (date: IOldDate) => boolean;
  affect: (memory: Memory) => MenaionWorship
};

export type Memory = {
  description?: string;
  affection?: Affection;
  service?: Service;
  new(): MenaionWorship
} | {
  description?: string;
  affection?: Affection;
  service?: Service;
};

export type Service = {
  instructions: string;
  typikonSign: TypikonSign;
};
