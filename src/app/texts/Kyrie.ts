import { Replica } from '@models';

import { Doer } from '../worships/models';

export function Kyrie(count: number): Replica[] {
  return new Array(count).fill({ doer: Doer.Чтец, text: 'Господи помилуй' });
}
