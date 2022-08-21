import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-replica',
  templateUrl: 'replica.component.html',
  styleUrls: ['replica.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReplicaComponent {
  @Input() set character(type: 'deacon' | 'choir' | 'priest' | 'clergy' | 'reader') {
    this.characterText = {
      deacon: 'Диа́кон',
      choir: 'Хор',
      priest: 'Иере́й',
      clergy: 'Священнослужи́тели в алтаре́',
      reader: 'Чтец',
    }[type];
  }

  public characterText?: string;
}
