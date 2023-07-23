export type EkteniaConfig = {
  title: string;
  replicas: EkteniaReplica[];
  возглас: string;
};

export type EkteniaReplica = {
  deacon: string[];
  choir: string;
};
