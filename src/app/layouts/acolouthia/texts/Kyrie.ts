import { Doer, Replica } from '../typicon/worships';

export function Kyrie(count: number): Replica[] {
  return new Array(count).fill({ doer: Doer.Чтец, text: 'Господи помилуй' });
}
