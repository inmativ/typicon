import { EkteniaConfig } from '../models';

export const smallEkteniaConfig: EkteniaConfig = {
  title: 'ektenia.title.small',
  replicas: [
    {
      deacon: ['ektenia.deacon.0', 'ektenia.deacon.1'],
      choir: 'ektenia.choir.0',
    },
    {
      deacon: ['ektenia.deacon.2'],
      choir: 'ektenia.choir.1',
    },
  ],
  возглас: 'ektenia.priest.0',
};
