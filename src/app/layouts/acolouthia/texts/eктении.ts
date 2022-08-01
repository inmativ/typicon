import { Doer, Replica } from '../typicon/worships/models';

export function великаяЕктения(): Replica[] {
  return [
    { doer: Doer.Диакон, text: 'Миром Господу помолимся' },
    { doer: Doer.Иерей, text: 'Яко подобает Тебе...' },
    { doer: Doer.Хор, text: 'Аминь' },
  ];
}

export function малаяЕктения(acclamatia: string): Replica[] {
  return [
    { doer: Doer.Диакон, text: 'Паки и паки...' },
    { doer: Doer.Иерей, text: acclamatia },
    { doer: Doer.Хор, text: 'Аминь' },
  ];
}
