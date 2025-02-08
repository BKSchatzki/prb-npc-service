export const SPECIES_VALUES = [
  'aasimar',
  'dragonborn',
  'dwarf',
  'elf',
  'gnome',
  'goliath',
  'halfling',
  'human',
  'orc',
  'tiefling',
] as const;

export type SpeciesKeys = (typeof SPECIES_VALUES)[number];

export const isValidSpecies = (value: unknown): value is SpeciesKeys => {
  return typeof value === 'string' && SPECIES_VALUES.includes(value as SpeciesKeys);
};
