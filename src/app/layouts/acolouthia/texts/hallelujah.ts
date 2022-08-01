import { Doer, Replica } from '../typicon/worships/models';

export function hallelujah(doer = Doer.Чтец): Replica[] {
  return [
    { doer, text: 'Аллилуиа, Аллилуиа, Аллилуиа, слава Тебе, Боже' },
    { doer, text: 'Аллилуиа, Аллилуиа, Аллилуиа, слава Тебе, Боже' },
    { doer, text: 'Аллилуиа, Аллилуиа, Аллилуиа, слава Тебе, Боже' },
  ];
}
