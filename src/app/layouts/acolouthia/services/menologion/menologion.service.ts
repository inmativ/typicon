import { Injectable } from '@angular/core';

import { DAY } from '@constants';
import { OldDate } from '@utils';

import { MENOLOGION } from './constants';

@Injectable()
export class Menologion {
  public getMemory(date: OldDate) {
    const neighborhood = this._getNeighborhood(date);

    return neighborhood;
  }

  private _getNeighborhood(date: OldDate) {
    return Array(7)
      .fill(date.getTime())
      .map((time, i) => {
        const nearbyDate = new OldDate(time + (i - 3) * DAY);

        const weekDay = nearbyDate.getDay();
        const dayIndex = nearbyDate.getDate() - 1;
        const monthNumber = nearbyDate.getMonth();

        const month = MENOLOGION[monthNumber];
        const dayFactory = month[dayIndex];

        return dayFactory;
      });
  }
}
