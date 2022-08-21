import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ГЛАС } from '../../../octoechos/models';

@Component({
  selector: 'app-blessed-man',
  templateUrl: 'blessed-man.component.html',
  styleUrls: ['blessed-man.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlessedManComponent {
  @Input() public isSunday = false;

  @Input() public echo!: ГЛАС;

  protected firstAntiphoneEcho = ГЛАС.ОСЬМЫЙ;
}
