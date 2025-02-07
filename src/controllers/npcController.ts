import type {
  Request,
  Response,
} from 'express';

import npcService from '@/services/npcService';
import logger from '@/utils/logger';

class NpcController {
  getAllTraits(req: Request, res: Response) {
    try {
      const allTraits = npcService.serveAll();
      logger.info(`All traits served`);
      res.json(allTraits);
    } catch (err) {
      let msg;
      err instanceof Error ? (msg = err.message) : (msg = String(err));
      logger.error(`Error getting all traits: ${msg}`);
      res.status(500).json({ error: 'Failed to get all traits' });
    }
  }

  getRandomTraitsForOne(req: Request, res: Response) {
    try {
      const randomTraitsForOne = npcService.serveRandomTraitsForOne();
      logger.info(`Random traits for one NPC served`);
      res.json(randomTraitsForOne);
    } catch (err) {
      let msg;
      err instanceof Error ? (msg = err.message) : (msg = String(err));
      logger.error(`Error getting random traits for one  NPC: ${msg}`);
      res.status(500).json({ error: 'Failed to get random traits for one NPC' });
    }
  }
}

const npcController = new NpcController();

export default npcController;
