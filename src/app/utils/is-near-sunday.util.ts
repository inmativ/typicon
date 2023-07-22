import { WeekDay } from '@angular/common';

import { WEEK_HALF } from '@constants';
import { IДатаПоСтаромуСтилю } from '@utils';

export function isNearSunday(date: IДатаПоСтаромуСтилю): boolean {
  const isSunday = date.getDay() === WeekDay.Sunday;

  return isSunday && isNear();

  function isNear(): boolean {
    const day = date.получитьДень();

    // TODO: Не помню, что значит 16. Надо будет переписать.
    const difference = day - 16;

    return Math.abs(difference) <= WEEK_HALF;
  }
}
