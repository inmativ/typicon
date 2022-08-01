import { Doer } from '../typicon/worships/models';

export function аминь(doer = Doer.Чтец) {
  return { doer, text: 'Аминь' };
}
