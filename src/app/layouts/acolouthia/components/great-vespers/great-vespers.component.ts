import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Replica } from '../../typicon/worships/models';

@Component({
  selector: 'app-great-vespers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'great-vespers.component.html',
  styleUrls: ['great-vespers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreatVespersComponent {
  @Input() public greatVespers?: Replica[];
}
