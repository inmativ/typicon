import { Doer, ReplicaType } from '../worships/models';

export type Replica = {
  doer: Doer;
  type?: ReplicaType;
  text: string;
  features?: string;
};
