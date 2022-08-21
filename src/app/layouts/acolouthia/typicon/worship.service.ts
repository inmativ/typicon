import { Injectable } from '@angular/core';

import { IOldDate } from '@utils';

import { Menologion } from './menologion.service';

import { ГЛАС } from '../octoechos/models';
import { Worship } from './models';

@Injectable()
export class WorshipService {
  constructor(private readonly _menologion: Menologion) {}

  public getByDate(date: IOldDate): Worship {
    const memory = this._menologion.getMemory(date);

    const day = { echo: ГЛАС.ОСЬМЫЙ };
    return { ...memory, ...day };
  }
}
