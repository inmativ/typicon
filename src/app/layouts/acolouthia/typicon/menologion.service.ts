import { Injectable } from '@angular/core';

import { DAY } from '@constants';
import { IOldDate, OldDate } from '@utils';

import { MENOLOGION } from './menologion';
import { Affection, Memory, MenologionWorship } from './models';

@Injectable()
export class Menologion {
  public getMemory(date: IOldDate): MenologionWorship {
    /*
     TODO: В один день обычно бывает несколько памятей разных святых
     или несколько вариантов празднования памяти одного святого.
     Нужен механизм выбора конкретной памяти. */
    const [Memory] = this.getMemoryList(date);

    const affection = this._getAffection(date);

    const affectionMemory = affection
      ? affection.affect(Memory)
      : new Memory();

    return affectionMemory;
  }

  public getMemoryList(date: IOldDate): Memory[] {
    const dayNumber = date.getDate();
    const monthNumber = date.getMonth();

    const month = MENOLOGION[monthNumber];
    const day = month[dayNumber];

    return day?.memories || [];
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
