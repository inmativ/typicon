import { Injectable } from '@angular/core';

import { IOldDate } from '@utils';

import { Menologion } from '../menologion';
import { Worship } from '../menologion/models';

@Injectable()
export class WorshipService {
  constructor(private readonly _menologion: Menologion) {

  }

  public getByDate(date: IOldDate): Worship {
    return this._menologion.getMemory(date);
  }
}
