import { Request, Response, NextFunction } from 'express';
import { TypeController } from '../types/typeController.type';
import { ApiError } from '../errors/apiError';

export const tryCatch =
  (controller: TypeController) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await controller(req, res, next);
      if (data !== undefined) {
        res.status(200).send(data);
      }
    } catch (err: any) {
      if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message, errors: err.errors });
      }
      return res.status(500).json({ message: 'Something happening' });
    }
  };
