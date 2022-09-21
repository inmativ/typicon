import { WeekDay } from '@angular/common';

import { DAY } from '@constants';
import { MonthDay, SimpleDateString, TimeMS } from '@models';

/**
 @description
  TODO: Будет работать корректно только для дат с 1900 по 2100 годы.
  10	15 октября 1582 — 11 марта 1700
  11	12 марта 1700 — 12 марта 1800
  12	13 марта 1800 — 13 марта 1900
  13	14 марта 1900 — 14 марта 2100
  14	15 марта 2100 — 15 марта 2200
  15	16 марта 2200 — 16 марта 2300
  16	17 марта 2300 — 17 марта 2500
 */
const MS_DIFFERENCE = 13 * DAY;

export interface IOldDate {
  getMonthDay(): MonthDay;
  getDay(): WeekDay;
  getTime(): TimeMS;
}

export class OldDate implements IOldDate {
  private readonly _oldDate: Date;

  constructor(date?: MonthDay | SimpleDateString | number) {
    this._oldDate = this._getOldDate(date);
  }

  public getMonthDay(): MonthDay {
    const month = this._oldDate.getMonth();
    const day = this._oldDate.getDate();
    return { month, day };
  }

  public getDay(): WeekDay {
    return this._oldDate.getDay();
  }

  public getTime(): TimeMS {
    return this._oldDate.getTime();
  }

  private _getOldDate(date: number | MonthDay | SimpleDateString | undefined): Date {
    const newDate = this._getNewDate(date);

    const newTime = newDate.getTime();

    return new Date(newTime - MS_DIFFERENCE);
  }

  private _getNewDate(date?: number | MonthDay | SimpleDateString): Date {
    if (!date) {
      return new Date();
    }

    if (typeof date === 'object') {
      return this._getDateFromMonthDay(date);
    }

    return new Date(date);
  }

  private _getDateFromMonthDay({ month, day }: MonthDay): Date {
    const date = new Date();
    date.setMonth(month);
    date.setDate(day);

    return date;
  }
}
