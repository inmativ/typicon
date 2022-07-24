import { SimpleDateString } from '@models';

const THIRTEEN_LOWER_EDGE = -2202768000000;
const THIRTEEN_UPPER_EDGE = 4108752000000;

export class OldDate extends Date {
  constructor(dateString: SimpleDateString) {
    super(dateString);

    const time = super.getTime();
    if (time < THIRTEEN_LOWER_EDGE || time > THIRTEEN_UPPER_EDGE) {
      throw new Error('out of date range');
    }
  }

  override getDate(): number {
    /*
    TODO: Будет работать корректно только для дат с 1900 по 2100 годы.
    10	15 октября 1582 — 11 марта 1700
    11	12 марта 1700 — 12 марта 1800
    12	13 марта 1800 — 13 марта 1900
    13	14 марта 1900 — 14 марта 2100
    14	15 марта 2100 — 15 марта 2200
    15	16 марта 2200 — 16 марта 2300
    16	17 марта 2300 — 17 марта 2500
    */

    const difference = 13;

    return super.getDate() - difference;
  }
}
