import jwt from 'jsonwebtoken';
import { User } from '../entities/User';

export interface IToken {
  user: User;
  secret: string;
  expires: string;
}

export interface JwtInfoUser extends jwt.JwtPayload {
  id: number;
  email: string;
}
