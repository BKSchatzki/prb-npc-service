import type { Request, Response } from 'express';
import { Router } from 'express';

import logger from '@/utils/logger';

const router = Router();

router.get('/names', async (req: Request, res: Response) => {
  try {
    const name = { name: 'Namey McName' };
    res.json(name);
  } catch (err) {
    logger.error(`Error serving name: ${err}`);
    res.status(500).json({ error: 'Failed to get name' });
  }
});

export default router;
