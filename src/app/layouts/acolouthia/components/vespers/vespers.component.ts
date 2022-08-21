import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ГЛАС } from '../../octoechos/models';
import { VespersFeatures } from '../../typicon/models';

@Component({
  selector: 'app-vespers',
  templateUrl: 'vespers.component.html',
  styleUrls: ['vespers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VespersComponent {
  @Input() public features!: VespersFeatures;

  @Input() public echo!: ГЛАС;

  public patriarchName = 'Кирилле';

  public bishop = 'Высокопреосвященнейшем Митрополите Игнатии';

  public locality = 'граде сем';

  public isSunday = true;
}
