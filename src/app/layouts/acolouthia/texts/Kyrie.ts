import { Doer, Replica } from '../typicon/worships/models';

export function Kyrie(count: number): Replica[] {
  return new Array(count).fill({ doer: Doer.Чтец, text: 'Господи помилуй' });
}
