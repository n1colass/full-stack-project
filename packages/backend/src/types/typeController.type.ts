import { Request, Response, NextFunction } from 'express';

export type TypeController = (req: Request, res: Response, next: NextFunction) => Promise<any>;
