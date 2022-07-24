import { Injectable } from '@angular/core';

import { IOldDate } from '@utils';

import { Worship } from '../../models';
import { Menologion } from '../menologion';

@Injectable()
export class WorshipService {
  constructor(private readonly _menologion: Menologion) {

  }

  getByDate(date: IOldDate): Worship {
    const memoryFactory = this._menologion.getMemory(date);

    return memoryFactory as any;
  }
}
