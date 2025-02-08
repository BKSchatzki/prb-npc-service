export type NamesOfSpecies = {
  givenNames: {
    male: string[];
    female: string[];
  };
  surnames: string[];
};

export type Names = {
  aasimar: NamesOfSpecies;
  dragonborn: NamesOfSpecies;
  dwarf: NamesOfSpecies;
  elf: NamesOfSpecies;
  gnome: NamesOfSpecies;
  goliath: NamesOfSpecies;
  halfling: NamesOfSpecies;
  human: NamesOfSpecies;
  orc: NamesOfSpecies;
  tiefling: NamesOfSpecies;
};
