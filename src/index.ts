import type { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import express from 'express';

import npcRouter from '@/routes/npcRoutes';
import logger from '@/utils/logger';

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

app.use('/api/v1/', npcRouter);

app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Unhandled error: ${err}`);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.get('/', (req: Request, res: Response) => {
  res.json({ helloWorld: 'Hello, World!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
