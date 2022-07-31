import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { SimpleDateString } from '@models';
import { OldDate } from '@utils';

import { map } from 'rxjs';

import { Menologion } from './typicon/menologion';
import { WorshipService } from './typicon/worships';

@Component({
  selector: 'app-acolouthia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [WorshipService, Menologion],
  templateUrl: 'acolouthia.component.html',
  styleUrls: ['acolouthia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcolouthiaComponent {
  public date = this._getControl();

  public test = '';

  constructor(private readonly _worshipService: WorshipService) {
    this.date.valueChanges
      .pipe(
        map((dateString) => new OldDate(dateString)),
        map((oldDate) => this._worshipService.getByDate(oldDate)),
      )
      .subscribe((params) => this.test = JSON.stringify(params));

    this.date.setValue('2022-07-31');
  }

  private _getControl(): FormControl<SimpleDateString> {
    const date = new Date()
      .toLocaleDateString()
      .replace(/\./g, '-');

    return new FormControl(date, { nonNullable: true });
  }
}
