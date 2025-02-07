import { Router } from 'express';

import npcController from '@/controllers/npcController';

const router = Router();

router.get('/traits', npcController.getAllTraits);

export default router;
