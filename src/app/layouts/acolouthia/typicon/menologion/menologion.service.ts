import { Injectable } from '@angular/core';

import { DAY } from '@constants';
import { IOldDate, OldDate } from '@utils';

import { MENOLOGION } from './constants';
import { Affection, Memory, Worship } from './models';

@Injectable()
export class Menologion {
  public getMemory(date: IOldDate): Worship {
    const [Memory] = this.getMemoryList(date);

    const affection = this._getAffection(date);

    const affectionMemory = affection
      ? affection.affect(Memory)
      : this._instance(Memory);

    return affectionMemory;
  }

  private _instance(Memory: Memory): Worship {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new Memory();
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
