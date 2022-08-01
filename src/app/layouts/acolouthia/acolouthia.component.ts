import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { SimpleDateString } from '@models';
import { OldDate } from '@utils';

import { map, Observable, tap } from 'rxjs';

import { VespersComponent } from './components';
import { Menologion } from './typicon/menologion';
import { Worship } from './typicon/menologion/models';
import { WorshipService } from './typicon/worships';

@Component({
  selector: 'app-acolouthia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, VespersComponent],
  providers: [WorshipService, Menologion],
  templateUrl: 'acolouthia.component.html',
  styleUrls: ['acolouthia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcolouthiaComponent {
  public date = this._getControl();

  public readonly worship$: Observable<Worship>;

  constructor(private readonly _worshipService: WorshipService) {
    this.worship$ = this.date.valueChanges.pipe(
      map((dateString) => new OldDate(dateString)),
      map((oldDate) => this._worshipService.getByDate(oldDate)),
      tap({
        next: (value) => console.log('next: ', value),
        error: (error: unknown) => console.log('error: ', error),
        complete: () => console.log('complete'),
      }),
    );

    setTimeout(() => this.date.setValue('2022-07-31'), 0);
  }

  private _getControl(): FormControl<SimpleDateString> {
    const date = new Date()
      .toLocaleDateString()
      .replace(/\./g, '-');

    return new FormControl(date, { nonNullable: true });
  }
}
