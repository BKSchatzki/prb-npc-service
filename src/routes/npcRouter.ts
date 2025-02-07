import { Router } from 'express';

import npcController from '@/controllers/npcController';

const router = Router();

router.get('/names', npcController.getAllNames);
router.get('/traits', npcController.getAllTraits);
router.get('/traits/random', npcController.getRandomTraitsForOne);

export default router;
