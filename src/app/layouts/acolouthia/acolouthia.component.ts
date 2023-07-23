import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SimpleDateString } from '@models';
import { ДатаПоСтаромуСтилю } from '@utils/old-date';

import { map, Observable, startWith, Subject } from 'rxjs';

import { Типикон } from './typicon';
import { Богослужение } from './typicon/models';

@Component({
  selector: 'app-acolouthia',
  templateUrl: 'acolouthia.component.html',
  styleUrls: ['acolouthia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcolouthiaComponent {
  public date = this._getControl();

  public readonly worship$: Observable<Богослужение> = new Subject<Богослужение>();

  constructor(private readonly _worshipService: Типикон) {
    this.worship$ = this.date.valueChanges.pipe(
      startWith(this.date.value),
      map((dateString) => new ДатаПоСтаромуСтилю(dateString)),
      map((oldDate) => this._worshipService.getByDate(oldDate)),
    );
  }

  private _getControl(): FormControl<SimpleDateString> {
    const date = new Date().toLocaleDateString().replace(/\./g, '-') as SimpleDateString;

    return new FormControl(date, { nonNullable: true });
  }
}
