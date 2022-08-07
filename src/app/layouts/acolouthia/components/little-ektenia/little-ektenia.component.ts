import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ReplicaComponent } from '../replica';

@Component({
  selector: 'app-little-ektenia',
  standalone: true,
  imports: [CommonModule, ReplicaComponent],
  templateUrl: 'little-ektenia.component.html',
  styleUrls: ['little-ektenia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LittleEkteniaComponent {}
