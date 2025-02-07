export type SpeciesNames = {
  givenNames: {
    male: string[];
    female: string[];
  };
  surnames: string[];
};

export type Names = Record<string, SpeciesNames>;
