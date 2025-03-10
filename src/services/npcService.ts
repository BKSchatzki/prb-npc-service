import npcNames from '@/content/npcNames.js';
import npcTraits from '@/content/npcTraits.js';
import type {
  Names,
  NamesOfSpecies,
} from '@/types/namesTypes.js';
import {
  SPECIES_VALUES,
  type SpeciesKeys,
} from '@/types/speciesTypes.js';
import type {
  SingleTraits,
  Traits,
} from '@/types/traitsTypes.js';
import logger from '@/utils/logger.js';

class NpcService {
  traits: Traits;
  names: Names;

  constructor(names: Names, traits: Traits) {
    this.names = names;
    this.traits = traits;
  }

  serveAllNames(): Names {
    try {
      return this.names;
    } catch (err) {
      let msg;
      err instanceof Error ? (msg = err.message) : (msg = String(err));
      logger.error(`Error serving all names: ${msg}`);
      throw new Error('Failed to serve all names');
    }
  }

  serveAllTraits(): Traits {
    try {
      return this.traits;
    } catch (err) {
      let msg;
      err instanceof Error ? (msg = err.message) : (msg = String(err));
      logger.error(`Error serving all traits: ${msg}`);
      throw new Error('Failed to serve all traits');
    }
  }

  serveOneNpc() {
    try {
      const traits = this.selectRandomTraits() as SingleTraits;
      const species = SPECIES_VALUES[
        Math.floor(Math.random() * SPECIES_VALUES.length)
      ] as (typeof SPECIES_VALUES)[number];
      const name = this.selectRandomNameFromSpeciesAndGender(species, traits.gender);
      return { name, species, ...traits };
    } catch (err) {
      let msg;
      err instanceof Error ? (msg = err.message) : (msg = String(err));
      logger.error(`Error serving one NPC: ${msg}`);
      throw new Error(`Failed to serve one NPC`);
    }
  }

  serveOneNpcOfSpecies(species: SpeciesKeys) {
    try {
      const traits = this.selectRandomTraits() as SingleTraits;
      const name = this.selectRandomNameFromSpeciesAndGender(species, traits.gender);
      return { name, species, ...traits };
    } catch (err) {
      let msg;
      err instanceof Error ? (msg = err.message) : (msg = String(err));
      logger.error(`Error serving one ${species || 'unspecified'} NPC: ${msg}`);
      throw new Error(`Failed to serve one ${species || 'unspecified'} NPC`);
    }
  }

  private selectRandomNameFromSpeciesAndGender(species: SpeciesKeys, gender: string) {
    const speciesNames: NamesOfSpecies = this.names[species];
    const maleName =
      speciesNames.givenNames.male[Math.floor(Math.random() * speciesNames.givenNames.male.length)];
    const femaleName =
      speciesNames.givenNames.female[
        Math.floor(Math.random() * speciesNames.givenNames.female.length)
      ];
    const eitherName = [maleName, femaleName][Math.floor(Math.random() * 2)];
    const surname = speciesNames.surnames[Math.floor(Math.random() * speciesNames.surnames.length)];
    return gender === 'male'
      ? `${maleName} ${surname}`
      : gender === 'female'
      ? `${femaleName} ${surname}`
      : `${eitherName} ${surname}`;
  }

  private selectRandomTraits() {
    return {
      gender: this.getRandomStringFromArray(this.traits.gender),
      age: this.getRandomStringFromArray(this.traits.age),
      anatomy: {
        build: this.getRandomStringFromArray(this.traits.anatomy.build),
        height: this.getRandomStringFromArray(this.traits.anatomy.height),
      },
      skin: {
        color: this.getRandomStringFromArray(this.traits.skin.color),
        texture: this.getRandomStringFromArray(this.traits.skin.texture),
      },
      hair: {
        color: this.getRandomStringFromArray(this.traits.hair.color),
        style: this.getRandomStringFromArray(this.traits.hair.style),
      },
      eyes: {
        color: this.getRandomStringFromArray(this.traits.eyes.color),
        shape: this.getRandomStringFromArray(this.traits.eyes.shape),
      },
      voice: {
        pitch: this.getRandomStringFromArray(this.traits.voice.pitch),
        quality: this.getRandomStringFromArray(this.traits.voice.quality),
        speed: this.getRandomStringFromArray(this.traits.voice.speed),
        volume: this.getRandomStringFromArray(this.traits.voice.volume),
      },
      features: this.getRandomStringFromArray(this.traits.features),
      mannerisms: this.getRandomStringFromArray(this.traits.mannerisms),
      motivation: this.getRandomStringFromArray(this.traits.motivation),
      plotHooks: this.getRandomStringFromArray(this.traits.plotHooks),
    };
  }

  private getRandomStringFromArray(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

const npcService = new NpcService(npcNames, npcTraits);

export default npcService;
