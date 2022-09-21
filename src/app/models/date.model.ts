import { Flavor } from '@utils/type';

import { Month } from './monthes.model';

export type SimpleDateString = Flavor<string, 'simple_date_string'>;
export type MonthNumber = Flavor<number, 'month_number'>;
export type DayNumber = Flavor<number, 'day_number'>;
export type YearNumber = Flavor<number, 'year_number'>;
export type TimeMS = Flavor<number, 'time_in_ms'>;

export type MonthDay = { month: Month; day: DayNumber; };
