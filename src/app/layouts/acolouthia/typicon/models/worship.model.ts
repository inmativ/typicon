import { ГЛАС } from '../../octoechos/models';
import { СлужбаМинеи } from './menologion-worship.model';
import { ОсобенностиВечерни } from './vespers-features.model';

export type Богослужение = СлужбаМинеи & {
  глас: ГЛАС;
  вечерня: ОсобенностиВечерни;
};
