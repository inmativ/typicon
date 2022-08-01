import { ГЛАС } from '../../typicon/octoechos/models';
import { Doer, Replica } from '../../typicon/worships/models';

export function стихирыГосподиВоззвах(глас: ГЛАС, count: number): Replica[] {
  return [
    { doer: Doer.Хор, text: 'Господи, воззвах:' },
    { doer: Doer.Чтец, text: 'Положи, Господи: 140, 141, 129, 116' },
    // Если на четыре, то чтец читает до слов "От стражи утренния до нощи"
    // Хор поёт стихиры по уставу
  ];
  /*
  И ставим стихи 4. И поем стихиры воскресны гласа, три, повторяюще 1.
  Слава, и ныне, Богородичен.
   */
}
