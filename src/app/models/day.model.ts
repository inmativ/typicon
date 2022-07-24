export enum TypikonSign {
  БЕЗ_ЗНАКА = '',
  ВЕЛИКИЙ = '🕀',
  ВСЕНОЩНОЕ_БДЕНИЕ = '🕁',
  ПОЛИЕЛЕЙ = '🕂',
  ШЕСТЕРИЧНАЯ_ИЛИ_СЛАВОСЛОВНАЯ = '🕃', // TODO: Необходимо различать со славословием.
}

enum WeekDay {
  SUNDAY,
  MONDAY,
  THUSDAY,
  WEDNESDAY,
  THOUSDAY,
  FRIDAY,
  SATURDAY,
}

export type Service = {
  instructions: string;
  typikonSign: TypikonSign;
};

export type Memory = {
  description: string;
  service?: Service;
};

export type DayFactory = ((weekDay: number) => DayInstructions);

export type DayInstructions = {
  memories: Memory[];
  weekDay?: WeekDay;
};

export type Day = {
  memories: Memory[];
  weekDay?: WeekDay;
};
