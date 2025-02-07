import type { Request, Response } from 'express';

import npcService from '@/services/npcService';
import logger from '@/utils/logger';

class NpcController {
  getAllTraits(req: Request, res: Response) {
    try {
      const allTraits = npcService.serveAllTraits();
      res.json(allTraits);
    } catch (err) {
      let msg;
      err instanceof Error ? (msg = err.message) : (msg = String(err));
      logger.error(`Error serving name: ${msg}`);
      res.status(500).json({ error: 'Failed to get name' });
    }
  }
}

const npcController = new NpcController();

export default npcController;
