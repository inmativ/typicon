import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-acolouthia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'acolouthia.component.html',
  styleUrls: ['acolouthia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcolouthiaComponent {}
