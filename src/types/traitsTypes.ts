export type Traits = {
  gender: string[];
  age: string[];
  anatomy: { build: string[]; height: string[] };
  skin: { color: string[]; texture: string[] };
  hair: { color: string[]; style: string[] };
  eyes: { color: string[]; shape: string[] };
  voice: { pitch: string[]; quality: string[]; speed: string[]; volume: string[] };
  features: string[];
  mannerisms: string[];
  motivation: string[];
  plotHooks: string[];
};

export type SingleTraits = {
  [K in keyof Traits]: Traits[K] extends (infer U)[]
    ? U
    : Traits[K] extends object
    ? { [P in keyof Traits[K]]: Traits[K][P] extends Array<infer U> ? U : never }
    : Traits[K];
};
