import { WeekDay } from '@angular/common';

import { DAY } from '@constants';
import { OldMonthDay, SimpleDateString, TimeMS, YearNumber } from '@models';

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
  getMonthDay(): OldMonthDay;
  getDay(): WeekDay;
  getTime(): TimeMS;
  getYear(): YearNumber;
}

export class OldDate implements IOldDate {
  private readonly _oldDate: Date;

  constructor(date?: OldMonthDay | SimpleDateString | number) {
    this._oldDate = this._getOldDate(date);
  }

  public getMonthDay(): OldMonthDay {
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

  public getYear(): YearNumber {
    return this._oldDate.getFullYear();
  }

  private _getOldDate(date: number | OldMonthDay | SimpleDateString | undefined): Date {
    if (typeof date === 'object') {
      return this._getDateFromMonthDay(date);
    }

    const newDate = date ? new Date(date) : new Date();

    const newTime = newDate.getTime();

    return new Date(newTime - MS_DIFFERENCE);
  }

  private _getDateFromMonthDay({ month, day }: OldMonthDay): Date {
    const date = new Date();
    date.setMonth(month);
    date.setDate(day);

    return date;
  }
}
