import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Replica } from '../replica/models';

@Component({
  selector: 'app-great-vespers',
  templateUrl: 'great-vespers.component.html',
  styleUrls: ['great-vespers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreatVespersComponent {
  @Input() public greatVespers?: Replica[];
}
