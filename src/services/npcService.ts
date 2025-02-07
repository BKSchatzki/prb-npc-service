import npcTraits from '@/content/npcTraits';
import logger from '@/utils/logger';

class NpcService {
  serveAllTraits() {
    try {
      return npcTraits;
    } catch (err: unknown) {
      let msg;
      err instanceof Error ? (msg = err.message) : (msg = String(err));
      logger.error(`Error getting all traits: ${msg}`);
      throw new Error('Failed to get all traits');
    }
  }
}

const npcService = new NpcService();

export default npcService;
