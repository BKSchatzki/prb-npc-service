import express, { Request, Response } from 'express';

import npcRouter from './routes/npcRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/v1/', npcRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({ helloWorld: 'Hello, World!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
