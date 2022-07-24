import { Replica } from '@models';

import { hallelujah, Kyrie, славаИНыне } from '../texts';
import { usualBeginning } from '../texts/horologion';
import { psalm83, psalm84, psalm85 } from '../texts/psalms';
import { Doer, ReplicaType } from './models';

export type ninthHourConfig = { insideTemple: boolean; troparions: string[] };

export function ninthHour(config: ninthHourConfig): Replica[] {
  const dogmatic = 'Иже нас ради рождейся от Девы…';
  const { troparions } = config;
  const hour = [
    ...usualBeginning(),
    { doer: Doer.Чтец, text: psalm83 },
    { doer: Doer.Чтец, text: psalm84 },
    { doer: Doer.Чтец, text: psalm85 },
    славаИНыне,
    ...hallelujah,
    ...Kyrie(3),
    ...слава(troparions).иНыне(dogmatic),
    { doer: Doer.Чтец, text: 'Владыко Господи, Иисусе Христе Боже наш…' },
  ];

  if (config.insideTemple) {
    const отпуст: Replica[] = [{ doer: Doer.Иерей, text: 'отпуст', type: ReplicaType['отпуст'] }];
    hour.push(...отпуст);
  }

  return hour;
}

function слава(troparions: string[]): { иНыне: (dogmatic: string) => Replica[] } {
  if (troparions.length === 1) troparions.unshift('');
  const [first, second] = troparions;

  const replicas = [
    { doer: Doer.Чтец, text: 'Слава' },
    { doer: Doer.Чтец, text: second },
    { doer: Doer.Чтец, text: 'И ныне' },
  ];

  if (first) replicas.unshift({ doer: Doer.Чтец, text: first });

  return {
    иНыне: (dogmatic: string): Replica[] => {
      replicas.push({ doer: Doer.Чтец, text: dogmatic });

      return replicas;
    },
  };
}
