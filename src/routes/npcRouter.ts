import { Router } from 'express';

import npcController from '@/controllers/npcController';

const router = Router();

router.get('/names', npcController.getAllNames);
router.get('/traits', npcController.getAllTraits);
router.get('/npc', npcController.getOneNpc);
router.get('/npc/:species', npcController.getOneNpcOfSpecies);

export default router;
