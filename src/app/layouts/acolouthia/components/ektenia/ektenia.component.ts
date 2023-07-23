import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplicaComponent } from '../replica';

@Component({
  selector: 'app-ektenia',
  standalone: true,
  imports: [CommonModule, ReplicaComponent],
  templateUrl: './ektenia.component.html',
  styleUrls: ['./ektenia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EkteniaComponent {}
