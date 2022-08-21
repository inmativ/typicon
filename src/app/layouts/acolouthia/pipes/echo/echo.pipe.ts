import { Pipe, PipeTransform } from '@angular/core';

import { ГЛАС } from '../../octoechos/models';

const echoes = {
  [ГЛАС.ПЕРВЫЙ]: 'а҃',
  [ГЛАС.ВТОРЫЙ]: 'в',
  [ГЛАС.ТРЕТИЙ]: 'г҃',
  [ГЛАС.ЧЕТВЕРТЫЙ]: 'д҃',
  [ГЛАС.ПЯТЫЙ]: 'е',
  [ГЛАС.ШЕСТЫЙ]: 'ѕ҃',
  [ГЛАС.СЕДМЫЙ]: 'ж',
  [ГЛАС.ОСЬМЫЙ]: 'и҃',
};

@Pipe({ name: 'echo' })
export class EchoPipe implements PipeTransform {
  public transform(value: ГЛАС): string {
    return echoes[value];
  }
}
