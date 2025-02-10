import type {
  Request,
  Response,
} from 'express';

import npcService from '@/services/npcService.js';
import {
  isValidSpecies,
  type SpeciesKeys,
} from '@/types/speciesTypes.js';
import logger from '@/utils/logger.js';

class NpcController {
  getAllNames(req: Request, res: Response) {
    try {
      const allNames = npcService.serveAllNames();
      logger.info(`All names served`);
      res.json(allNames);
    } catch (err) {
      let msg;
      err instanceof Error ? (msg = err.message) : (msg = String(err));
      logger.error(`Error getting all names: ${msg}`);
      res.status(500).json({ error: 'Failed to get all names' });
    }
  }

  getAllTraits(req: Request, res: Response) {
    try {
      const allTraits = npcService.serveAllTraits();
      logger.info(`All traits served`);
      res.json(allTraits);
    } catch (err) {
      let msg;
      err instanceof Error ? (msg = err.message) : (msg = String(err));
      logger.error(`Error getting all traits: ${msg}`);
      res.status(500).json({ error: 'Failed to get all traits' });
    }
  }

  getOneNpc(req: Request, res: Response) {
    try {
      const oneNpc = npcService.serveOneNpc();
      logger.info(`One NPC served`);
      res.json(oneNpc);
    } catch (err) {
      let msg;
      err instanceof Error ? (msg = err.message) : (msg = String(err));
      logger.error(`Error getting one NPC: ${msg}`);
      res.status(500).json({ error: 'Failed to get one NPC ' });
    }
  }

  getOneNpcOfSpecies(req: Request, res: Response) {
    try {
      const species = req.params.species;
      if (!isValidSpecies(species)) {
        logger.warn(`Invalid species parameter received: ${species}`);
        res.status(400).json({ error: 'Invalid species parameter' });
        return;
      }
      const oneNpcOfSpecies = npcService.serveOneNpcOfSpecies(species);
      logger.info(`One ${species} NPC served`);
      res.json(oneNpcOfSpecies);
    } catch (err) {
      let msg;
      err instanceof Error ? (msg = err.message) : (msg = String(err));
      logger.error(`Error getting one NPC of a species: ${msg}`);
      res.status(500).json({ error: 'Failed to get one NPC of a species' });
    }
  }
}

const npcController = new NpcController();

export default npcController;
