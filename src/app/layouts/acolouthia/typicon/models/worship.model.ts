import { MenaionWorship } from '../../menaion/models';
import { ГЛАС } from '../../octoechos/models';

export type Worship = MenaionWorship & {
  echo: ГЛАС;
};
