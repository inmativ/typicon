import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SimpleDateString } from '@models';
import { OldDate } from '@utils';

import { map, Observable } from 'rxjs';

import { Typicaris } from './typicon';
import { Worship } from './typicon/models';

@Component({
  selector: 'app-acolouthia',
  templateUrl: 'acolouthia.component.html',
  styleUrls: ['acolouthia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcolouthiaComponent {
  public date = this._getControl();

  public readonly worship$: Observable<Worship>;

  constructor(private readonly _worshipService: Typicaris) {
    this.worship$ = this.date.valueChanges.pipe(
      map((dateString) => new OldDate(dateString)),
      map((oldDate) => this._worshipService.getByDate(oldDate)),
    );
  }

  private _getControl(): FormControl<SimpleDateString> {
    const date = new Date()
      .toLocaleDateString()
      .replace(/\./g, '-');

    return new FormControl(date, { nonNullable: true });
  }
}
