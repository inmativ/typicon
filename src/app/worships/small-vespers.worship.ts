import { Replica } from '@models';

import { acclamatia, приидитеПоклонимся, славаИНыне } from '../texts';
import { hallelujah } from '../texts/hallelujah';
import { Kyrie } from '../texts/Kyrie';
import { psalm103 } from '../texts/psalms';
import { стихирыГосподиВоззвах } from '../texts/sticheron';
import { Doer } from './models';

export function smallVespers(): Replica[] {
  return [
    acclamatia.благословенБогНаш,
    { doer: Doer.Чтец, text: приидитеПоклонимся },
    { doer: Doer.Чтец, text: psalm103, features: 'тихо и кротким гласом' },
    славаИНыне,
    ...hallelujah,
    ...Kyrie(3),
    славаИНыне,
    ...стихирыГосподиВоззвах({ count: 4 }),
    { doer: Doer.Хор, text: 'Свете тихий:' },
  ];
  `
  Прокимен, Господь воцарися:
  
  Стих: Облечеся Господь в силу и препоясася. И паки, Господь воцарися:
  
  Таже, Сподоби Господи в вечер сей:
  
  И абие поем стиховны стихиру едину воскресну. И другия стихиры Богородицы, подобны 3, с припевы их.
  
  Слава, и ныне, Богородичен их.
  
  Таже, Ныне отпущаеши: Трисвятое, и по Отче наш: Тропарь воскресн.
  
  Слава, и ныне, Богородичен его.
  
  Посем глаголет иерей ектению малую: Помилуй нас Боже, по велицей милости твоей, молим ти ся услыши и помилуй.
  
  Лик: Господи помилуй, трижды.
  
  Еще молимся о Великом Господине и отце нашем Святейшем Патриархе (имя) и Преосвященнейшем Епископе (егоже есть область), и о всей во Христе братии нашей. Лик: Господи помилуй. Трижды.
  
  Еще молимся о Богохранимей стране Россистей, о властех и воинстве ея.
  
  Лик: Господи помилуй. Трижды.
  
  Еще молимся за всю братию и за вся христианы.
  
  Лик: Господи помилуй. Трижды.
  
  Возглас: Яко милостив и человеколюбец Бог еси, и тебе славу возсылаем Отцу и Сыну, и Святому Духу, ныне и присно, и во веки веков.
  
  Таже, Слава тебе Христе Боже:
  
  И отпуст малый, и многолетие.
  
  [Смотри] И вшедше в трапезу, глаголем: Ядят убозии и насытятся, и восхвалят Господа взыскающии его: жива будут сердца их в век века.
  
  Слава, и ныне: Господи помилуй, трижды. Благослови.
  
  И благословляет священник трапезу. И вкушаем представленная нам полегку, да не отягчимся на бдение.
  
  По ядении же, Слава, и ныне: Бысть чрево твое святая трапеза, имущая небеснаго хлеба, Христа Бога нашего, от негоже всяк ядый не умирает, якоже рече всех Богородительнице питатель.
  
  И посем, Честнейшую херувим:
  
  Таже, Возвеселил ны еси Господи в творениих твоих, и в делех руку твоею возрадуемся: знаменася на нас свет лица твоего Господи, дал еси веселие в сердце моем, от плода пшеницы, вина и елеа своего умножишася. в мире вкупе усну, и почию, яко ты Господи единаго на уповании вселил мя еси.
  
  Слава, и ныне: Господи помилуй, трижды. Благослови.
  
  Священник: С нами Бог, своею благодатию и человеколюбием, всегда, ныне и присно, и во веки веков, аминь.`;
}
