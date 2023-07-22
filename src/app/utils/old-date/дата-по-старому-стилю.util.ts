import { SimpleDateString } from '@models';

type Period = {
  days?: number;
  months?: number;
  years?: number;
};

export class ДатаПоСтаромуСтилю {
  public readonly day: number;
  public readonly month: number;
  public readonly year: number;

  constructor(date: SimpleDateString) {
    const [day, month, year] = date.split('-');

    this.day = Number(day);
    this.month = Number(month);
    this.year = Number(year);
  }

  public minus(period: Period) {
    const day = this.day - (period.days || 0);
    const month = this.month - (period.months || 0);
    const year = this.year - (period.years || 0);

    return new ДатаПоСтаромуСтилю(`${day}-${month}-${year}`)
  }

  public plus(period: Period) {
    const day = this.day + (period.days || 0);
    const month = this.month + (period.months || 0);
    const year = this.year + (period.years || 0);

    return new ДатаПоСтаромуСтилю(`${day}-${month}-${year}`)
  }
}