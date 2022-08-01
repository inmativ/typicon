import { isNearSunday } from '@utils';

import { ГЛАС } from '../../../octoechos/models';
import { greatVespers } from '../../../worships';
import { Affection, TypikonSign, Worship } from '../../models';

export class ОтцовШестиСоборов implements Worship {
  public static affection: Affection = {
    check: (date) => isNearSunday(date),
    affect: (memory) => new this(),
  };

  public readonly title = 'Ст҃ы́хъ ѻ҆тцє́въ шестѝ вселе́нскихъ собо́рѡвъ:';

  public readonly глас = ГЛАС.ШЕСТЫЙ;

  public readonly typikonSign = TypikonSign.ВСЕНОЩНОЕ_БДЕНИЕ;

  // public readonly малаяВечерня = {
  //   стихиры: [
  //     `Въ сꙋббѡ́тꙋ на ма́лѣй вече́рни стїхи̑ры воскре́сны, и҆ бцⷣѣ по ѻ҆бы́чаю. На вели́цѣй вече́рни, по ѻ҆бы́чномъ ѱалмѣ̀, пое́мъ: Блаже́нъ мꙋ́жъ: каѳі́смꙋ всю̀. На Гдⷭ҇и, воззва́хъ, стїхи̑ры воскре́сны д҃, и҆ ѻ҆тцє́въ ѕ҃, `,
  //     `И҆ ны́нѣ, бг҃оро́диченъ пе́рвый, гла́са.`,
  //   ],
  //   вход: `Вхо́дъ. Прокі́менъ днѐ. Чтє́нїѧ трѝ.`,
  // };

  // public readonly повечерие = `Прилꙋчи́вшагѡсѧ же ст҃а́гѡ пое́мъ на повече́рїи.`;

  public readonly vespers = greatVespers({ глас: ГЛАС.ШЕСТЫЙ, vigil: { isSunday: true }, count: 10 });
}
