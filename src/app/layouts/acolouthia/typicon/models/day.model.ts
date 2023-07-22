import { IДатаПоСтаромуСтилю } from '@utils';
import { ДатаПоСтаромуСтилю } from '@utils/old-date';

import { MenaionWorship } from '../../menaion/models';
import { СлужбаМинеи } from './menologion-worship.model';
import { TypikonSign } from './typikon-sign.model';

/** @deprecated */
export type Day_DEP = {
  memories: Memory_DEP[];
};

export type ДеньМесяцеслова = {
  памяти: Память[];
};

/** @deprecated */
export type Affection_DEP = {
  check: (date: IДатаПоСтаромуСтилю) => boolean;
  affect: (memory: Memory_DEP | Память) => MenaionWorship
};

export type Влияние = {
  проверить: (дата: ДатаПоСтаромуСтилю) => boolean;
  оказать: (память: Память) => СлужбаМинеи
};

/** @deprecated */
type Memory_DEP = {
  description?: string;
  affection?: Affection_DEP;
  service?: Service;
  new(): MenaionWorship
};

export type Память = {
  влияние?: Влияние;
  new(): СлужбаМинеи
};

export type Service = {
  instructions: string;
  typikonSign: TypikonSign;
};
