import { WeekDay } from '@angular/common';

import { Monthes } from '@models';
import { OldDate } from '@utils';

export function isNearSunday(date: Date): boolean {
  const isSunday = date.getDay() === WeekDay.Sunday;

  return isSunday && isNear();

  function isNear(): boolean {
    const memoryDate = new OldDate();
    memoryDate.setMonth(Monthes.JULY);
    memoryDate.setDate(16);

    const difference = date.getDate() - memoryDate.getDate();

    return Math.abs(difference) <= 3;
  }
}
