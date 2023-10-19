import { Request, Response, NextFunction } from 'express';
import { todoSchema, userSchema } from '../validators/todo.validator';

export const todoValidator = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const { error } = todoSchema.validate(data);
  if (error) {
    res.status(400).send({ message: 'Not accurate data' });
    return;
  }
  next();
};

export const userValidator = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const { error } = userSchema.validate(data);
  if (error) {
    res.status(400).send({ message: 'Not accurate data' });
    return;
  }
  next();
};
