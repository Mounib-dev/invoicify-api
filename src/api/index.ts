import { RequestHandler } from 'express';

export const api: RequestHandler = (req, res) => {
  res.status(200).json({
    message: 'Welcome to Node.js Express.js with TypeScript API',
  });
};
