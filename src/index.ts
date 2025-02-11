import path from 'node:path';

import cors from 'cors';
import type {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from 'express';
import express from 'express';

import npcRouter from '@/routes/npcRouter.js';
import logger from '@/utils/logger.js';

const __dirname = import.meta.dirname;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

app.use('/api/v1/', npcRouter);

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req: Request, res: Response) => {
  try {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
    logger.info(`Index page served`);
  } catch (err) {
    let msg;
    err instanceof Error ? (msg = err.message) : (msg = String(err));
    logger.error(`Error getting index file: ${msg}`);
    res.status(500).json({ error: 'Failed to get index file' });
  }
});

app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Unhandled error: ${err}`);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
