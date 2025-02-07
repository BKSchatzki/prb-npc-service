import npcNames from '@/content/npcNames';
import npcTraits from '@/content/npcTraits';
import type { Names } from '@/types/namesTypes';
import type { Traits } from '@/types/traitsTypes';
import logger from '@/utils/logger';

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

  serveRandomTraitsForOne() {
    try {
      return this.selectRandomTraits(this.traits);
    } catch (err) {
      let msg;
      err instanceof Error ? (msg = err.message) : (msg = String(err));
      logger.error(`Error serving traits for one random NPC: ${msg}`);
      throw new Error('Failed to serve traits for one random NPC');
    }
  }

  selectRandomTraits(traits: Traits): Traits {
    const randomTraits: Traits = {} as any;
    for (const key in traits) {
      const typedKey = key as keyof Traits;
      const value = traits[typedKey];
      if (typeof value === 'object' && !Array.isArray(value)) {
        randomTraits[typedKey] = this.selectRandomTraits(value);
      } else if (Array.isArray(value)) {
        const randomIndex = Math.floor(Math.random() * value.length);
        randomTraits[typedKey] = value[randomIndex];
      } else {
        randomTraits[typedKey] = value;
      }
    }

    return randomTraits;
  }
}

const npcService = new NpcService(npcNames, npcTraits);

export default npcService;
