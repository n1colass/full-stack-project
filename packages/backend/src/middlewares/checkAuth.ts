import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../errors/apiError';
import TokenService from '../services/token.service';

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const tokenService = new TokenService();
  try {
    const authToken = req.headers.authorization;
    if (!authToken) {
      throw ApiError.UnautorizeError();
    }
    const [, accessToken] = authToken.split(' ');
    if (!accessToken) {
      throw ApiError.UnautorizeError();
    }
    tokenService.verifyAccessToken(accessToken);

    next();
  } catch (err: any) {
    if (err instanceof ApiError) {
      return res.status(err.status).json({ message: err.message, errors: err.errors });
    }
    return res.status(500).json({ message: 'Something happening' });
  }
};
