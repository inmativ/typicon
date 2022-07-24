import { SimpleDateString } from '../layouts/acolouthia/acolouthia.component';

export class OldDate extends Date {
  constructor(dateString: SimpleDateString) {
    super(dateString);
  }
}
