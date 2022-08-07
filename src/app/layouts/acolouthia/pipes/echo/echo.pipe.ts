import { Pipe, PipeTransform } from '@angular/core';

import { ГЛАС } from '../../typicon/octoechos/models';

const echoes = {
  [ГЛАС.ПЕРВЫЙ]: 'а',
  [ГЛАС.ВТОРЫЙ]: 'в',
  [ГЛАС.ТРЕТИЙ]: 'г',
  [ГЛАС.ЧЕТВЕРТЫЙ]: 'д',
  [ГЛАС.ПЯТЫЙ]: 'е',
  [ГЛАС.ШЕСТЫЙ]: 's',
  [ГЛАС.СЕДМЫЙ]: 'ж',
  [ГЛАС.ОСЬМЫЙ]: 'о',
};

@Pipe({ name: 'echo' })
export class EchoPipe implements PipeTransform {
  public transform(value: ГЛАС): string {
    return echoes[value];
  }
}
