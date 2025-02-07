import { Router } from 'express';

const router = Router();

router.get('/names', async (req, res) => {
  try {
    const name = { name: 'Namey McName' };
    res.json(name);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get name' });
  }
});

export default router;
