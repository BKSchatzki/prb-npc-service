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

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [process.env.ALLOWED_OPTIONS || '0.0.0.0'];
const corsOptions = {
  origin: allowedOrigins,
};
app.use(cors(corsOptions));

app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

app.use('/api/v1/', npcRouter);

app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Unhandled error: ${err}`);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
