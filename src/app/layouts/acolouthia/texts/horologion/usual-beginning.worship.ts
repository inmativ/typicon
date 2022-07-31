import { Doer, Replica } from '../../typicon/worships';
import { acclamatia } from '../acclamatia';
import { славаИНыне } from '../славаИНыне';
import { трисвятоеПоОтчеНаш } from '../трисвятоеПоОтчеНаш';

export function usualBeginning(): Replica[] {
  return [
    acclamatia.благословенБогНаш,
    { doer: Doer.Чтец, text: 'Аминь. Слава Тебе, Боже наш, слава Тебе.' },
    { doer: Doer.Чтец, text: 'Царю Небесный...' },
    ...трисвятоеПоОтчеНаш,
    { doer: Doer.Чтец, text: 'Господи, помилуй (12 раз)' },
    славаИНыне,
    { doer: Doer.Чтец, text: 'Приидите, поклонимся...' },
  ];
}
