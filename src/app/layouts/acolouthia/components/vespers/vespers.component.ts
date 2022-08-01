import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

import { TypedSimpleChanges } from '@models';

import { ГЛАС } from '../../typicon/octoechos/models';
import { Replica } from '../../typicon/worships/models';
import { ReplicaComponent } from '../replica';
import { BlessedManComponent } from './blessed-man';
import { BlessedManFeatures } from './blessed-man/models';

@Component({
  selector: 'app-vespers',
  standalone: true,
  imports: [CommonModule, ReplicaComponent, BlessedManComponent],
  templateUrl: 'vespers.component.html',
  styleUrls: ['vespers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VespersComponent implements OnChanges {
  @Input() public vespers!: Replica[];

  public patriarchName = 'Кирилле';

  public bishop = 'Высокопреосвященнейшем Митрополите Игнатии';

  public locality = 'граде сем';

  public isSunday = true;

  public echo = ГЛАС.ШЕСТЫЙ;

  public blessedManFeatures: BlessedManFeatures = {};

  ngOnChanges(changes: TypedSimpleChanges<this>): void {
    if (changes.isSunday || changes.echo) {
      this.blessedManFeatures = this._updateBlessedManFeatures();
    }
  }

  private _updateBlessedManFeatures(): BlessedManFeatures {
    return this.isSunday
      ? { sunday: { echo: this.echo } }
      : {};
  }
}
