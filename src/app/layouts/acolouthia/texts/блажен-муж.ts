import { ГЛАС } from '../typicon/octoechos/models';
import { Doer, Replica } from '../typicon/worships/models';
import { малаяЕктения } from './eктении';
import { hallelujah } from './hallelujah';
import { славаИНыне } from './слава-и-ныне';

export function блаженМуж(глас: ГЛАС, config?: { isSunday: boolean; }): Replica[] {
  const { isSunday } = config || {};

  const antiphoneEnd = (acclamatia: string): Replica[] => [
    славаИНыне(Doer.Хор),
    ...hallelujah(Doer.Хор),
    ...малаяЕктения(acclamatia),
  ];

  const antiphons = [
    { doer: Doer.Хор, глас: ГЛАС.ОСЬМЫЙ, text: '1й антифон' },
    ...antiphoneEnd('Яко Твоя держава...'),
  ];

  if (isSunday) {
    antiphons.push(
      { doer: Doer.Хор, глас, text: '2й антифон' },
      ...antiphoneEnd('Яко Благ и Человеколюбец...'),
      { doer: Doer.Хор, глас, text: '3й антифон' },
      ...antiphoneEnd('Яко Ты еси Бог наш, Бог миловати и спасати...'),
    );
  }

  return antiphons;
}
