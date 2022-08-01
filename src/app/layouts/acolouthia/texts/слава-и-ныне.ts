import { Doer, Replica } from '../typicon/worships/models';

export function славаИНыне(doer = Doer.Чтец): Replica {
  return { doer, text: 'Слава, и ныне' };
}
