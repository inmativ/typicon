import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-acolouthia',
  templateUrl: './acolouthia.component.html',
  styleUrls: ['./acolouthia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcolouthiaComponent {
  public patriarchName = 'Кири́лле';
  public bishopric = 'Высокопреосвяще́ннейшем митрополи́те';
  public bishopName = 'Игна́тие';
  public locality: 'гра́де сем' | 'ве́си сей' = 'гра́де сем';
}
