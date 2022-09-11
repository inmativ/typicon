import { ГЛАС } from '../../octoechos/models';
import { MenologionWorship } from './menologion-worship.model';
import { VespersFeatures } from './vespers-features.model';

export type Worship = MenologionWorship & {
  echo: ГЛАС;
  vespers: VespersFeatures;
};
