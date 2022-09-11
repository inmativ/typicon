import { IOldDate } from '@utils';

import { MenaionWorship } from '../../menaion/models';
import { MenologionWorship } from './menologion-worship.model';
import { TypikonSign } from './typikon-sign.model';

/** @deprecated */
export type Day_DEP = {
  memories: Memory_DEP[];
};

export type Day = {
  memories: Memory[];
};

/** @deprecated */
export type Affection_DEP = {
  check: (date: IOldDate) => boolean;
  affect: (memory: Memory_DEP | Memory) => MenaionWorship
};

export type Affection = {
  check: (date: IOldDate) => boolean;
  affect: (memory: Memory) => MenologionWorship
};

/** @deprecated */
type Memory_DEP = {
  description?: string;
  affection?: Affection_DEP;
  service?: Service;
  new(): MenaionWorship
};

export type Memory = {
  affection?: Affection;
  new(): MenologionWorship
};

export type Service = {
  instructions: string;
  typikonSign: TypikonSign;
};
