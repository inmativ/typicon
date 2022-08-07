import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { LittleEkteniaComponent } from '../../little-ektenia';
import { ReplicaComponent } from '../../replica';
import { BlessedManFeatures } from './models';

@Component({
  selector: 'app-blessed-man',
  standalone: true,
  imports: [CommonModule, ReplicaComponent, LittleEkteniaComponent],
  templateUrl: 'blessed-man.component.html',
  styleUrls: ['blessed-man.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlessedManComponent {
  @Input() public features: BlessedManFeatures = {};
}
