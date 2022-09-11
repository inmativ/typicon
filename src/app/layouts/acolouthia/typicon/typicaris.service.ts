import { Injectable } from '@angular/core';

import { IOldDate } from '@utils';

import { Menologion } from './menologion.service';

import { ГЛАС } from '../octoechos/models';
import { Worship } from './models';

// Этот сервис умеет составлять богослужение из имеющихся данных.
// Часть логики находится в нём, а часть в шаблонах конкретных последований.
// То есть в шаблонах находятся неизменяемые тексты, а этот сервис составляет изменяемые.
// Затем неизменяемые применяются в шаблонах и там могут ещё как-то дополнительно обрабатываться.

// service: {
//   instructions: `Вечер, обычная кафисма. На Господи воззвах, стихиры на 6, глас 4. Подобен: Дал еси знамение: Масть имея: Слава, глас 8, самогласен: Священства законнаго: И ныне, Богородичен или Крестобогородичен. На стиховне октоиха: Слава, святаго, глас 2: Яко чист:

//   Тропарь, глас 4: Священства одеждею обложен премудре, по закону Божию всесожжения приятна священнолепно приносил еси Захарие, и был еси светильник и зритель тайных, знамения в тебе благодати нося явственно всемудре, и мечем убиен быв в храме Божии, Христов пророче, с Предтечею моли спастися душам нашим.

//   На утрени, на Бог Господь, тропарь пророка, дважды. Слава, и ныне, Богородичен. и обычныя кафисмы, и седальны октоиха, и чтения. Каноны октоиха оба без мученичнов: И святаго на 6: глас 8. По 3-й песни, седален святаго, глас 8, дважды. Слава, и ныне, Богородичен, или Крестобогородичен. По 6-й песни,

//   Кондак, глас 3. Подобен: Дева днесь: Пророк днесь и священник вышняго, Захариа предложи Предтечев родитель трапезу своея памяти, верныя питая: питие бо правды всем растворив, сего ради скончавается, яко Божественный таинник Божия благодати.

//   И икос: и пролог. По 9-й песни, светилен октоиха: Слава, святаго: И ныне, Богородичен. На стиховне октоиха, Слава, святаго, глас 8. Жертвы принося: На литургии, блаженна октоиха, на 4. И святаго, песнь 3-я на 4. Прокимен, глас 7: Возвеселится праведник о Господе: Стих: Услыши Боже глас мой. Апостол ко евреем, зачало 314. Аврааму обетовая Бог: Аллилуиа, глас 7: Свет возсия праведнику. Евангелие матфеа, зачало 96: Горе вам книжницы и фарисее лицемери: Причастен, В память вечную:`,
// },

@Injectable()
export class Typicaris {
  constructor(private readonly _menologion: Menologion) {}

  public getByDate(date: IOldDate): Worship {
    const memory = this._menologion.getMemory(date);

    // TODO: Здесь нужно по Пасхалии вычислить неделю по Пятидесятнице и глас.

    const day = { echo: ГЛАС.ОСЬМЫЙ };
    return { ...memory, ...day, vespers: {} };
  }
}
