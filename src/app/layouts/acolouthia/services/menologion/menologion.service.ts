import { Injectable } from '@angular/core';

import { DAY } from '@constants';
import { IOldDate, OldDate } from '@utils';

import { MENOLOGION } from './constants';
import { Affection, Memory } from './models';

@Injectable()
export class Menologion {
  public getMemory(date: IOldDate) {
    const [memory] = this.getMemoryList(date);

    const affection = this._getAffection(date);

    return affection?.affect(memory);
  }

  public getMemoryList(date: IOldDate): Memory[] {
    const dayIndex = date.getDate() - 1;
    const monthNumber = date.getMonth();

    const month = MENOLOGION[monthNumber];
    const { memories } = month[dayIndex];

    return memories;
  }

  private _getAffection(date: IOldDate): Affection | undefined {
    const blankArray = Array(7).fill(date.getTime());

    const nearbyMemories = blankArray.flatMap((time, i) => {
      const nearbyDate = new OldDate(time + (i - 3) * DAY);
      return this.getMemoryList(nearbyDate);
    });

    const affectionMemory = nearbyMemories.find(({ affection }) => affection?.check(date));

    return affectionMemory?.affection;
  }
}
