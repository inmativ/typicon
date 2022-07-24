import { Monthes, WeekDay } from '@models';
import { OldDate } from '@utils';

export function isNearSunday(date: Date): boolean {
  const isSunday = date.getDay() === WeekDay.SUNDAY;

  return isSunday && isNear();

  function isNear(): boolean {
    const memoryDate = new OldDate();
    memoryDate.setMonth(Monthes.JULY);
    memoryDate.setDate(16);

    const difference = date.getDate() - memoryDate.getDate();

    return Math.abs(difference) <= 3;
  }
}
