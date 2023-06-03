import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

import { TypedSimpleChanges } from '@models';

import { ГЛАС } from '../../../octoechos/models';

const KYRIE_EKEKRAXA_VERSES = [
  'И҆зведѝ и҆з̾ темни́цы дꙋ́шꙋ мою̀, и҆сповѣ́датисѧ и҆́мени твоемꙋ̀: менѐ ждꙋ́тъ првⷣницы, до́ндеже возда́си мнѣ̀.',
  'Мене́ ждут пра́ведницы,// до́ндеже возда́си мне.',
  'Из глубины́ воззва́х к Тебе́, Го́споди,// Го́споди, услы́ши глас мой.',
  'Да бу́дут у́ши Твои́// вне́млюще гла́су моле́ния моего́.',
  'А́ще беззако́ния на́зриши, Го́споди, Го́споди, кто постои́т?// Я́ко у Тебе́ очище́ние е́сть.',
  'И́мене ра́ди Твоего́ потерпе́х Тя, Го́споди, потерпе́ душа́ моя́ в сло́во Твое́,// упова́ душа́ моя́ на Го́спода.',
  'От стра́жи у́тренния до но́щи, от стра́жи у́тренния,// да уповае́т Изра́иль на Го́спода.',
  'Я́ко у Го́спода ми́лость, и мно́гое у Него́ избавле́ние,// и Той изба́вит Изра́иля от всех беззако́ний eго́.',
  'Хвали́те Го́спода вси язы́цы,// похвали́те Его́ вси лю́дие.',
  'Я́ко утверди́ся ми́лость Его́ на нас,// и и́стина Госпо́дня пребыва́ет во век.',
  'Сла́ва Отцу́ и Сы́ну и Свято́му Ду́ху.',
  'И ны́не и при́сно и во ве́ки веко́в. Ами́нь.',
];

type Stichera = {
  verse: string;
  text?: string;
};

@Component({
  selector: 'app-kyrie-ekekraxa',
  templateUrl: 'kyrie-ekekraxa.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KyrieEkekraxaComponent implements OnChanges {
  @Input() public params!: { title: string; echo: ГЛАС; similarity?: string; text: string[] }[];

  protected echo!: ГЛАС;

  protected groups!: { title: string; sticheron: Stichera[] }[];

  ngOnChanges(changes: TypedSimpleChanges<this>): void {
    if (changes.params) {
      this._updateSticheron();
    }
  }

  private _updateSticheron(): void {
    const [firstStichera] = this.params;
    this.echo = firstStichera.echo;

    const sticheras = this.params.flatMap(({ text }) => text);

    const versesMaxIndex = KYRIE_EKEKRAXA_VERSES.length - 1;
    const sticherasMaxIndex = sticheras.length - 1;

    KYRIE_EKEKRAXA_VERSES.reduce((acc, _, i) => {
      const v = versesMaxIndex - i;
      const t = sticherasMaxIndex - i;

      const verse = KYRIE_EKEKRAXA_VERSES[v];
      const text = sticheras[t];

      acc.unshift({ text, verse });

      return acc;
    }, [] as Stichera[]);
  }
}
