import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { ReplicaComponent } from '../replica';
import { greatEkteniaConfig, smallEkteniaConfig } from './config';
import { EkteniaConfig } from './models';

import ru from './i18n/ru.json';

const configs: Record<EkteniaType, EkteniaConfig> = {
  малая: smallEkteniaConfig,
  великая: greatEkteniaConfig,
};

type EkteniaType = 'малая' | 'великая';

@Component({
  selector: 'app-ektenia',
  standalone: true,
  imports: [CommonModule, ReplicaComponent, TranslateModule],
  templateUrl: './ektenia.component.html',
  styleUrls: ['./ektenia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EkteniaComponent implements OnInit {
  @Input()
  public type: EkteniaType = 'малая';

  protected config = smallEkteniaConfig;

  constructor(translate: TranslateService) {
    translate.setTranslation('ru', ru, true);
  }

  ngOnInit() {
    this.config = configs[this.type];
  }
}
