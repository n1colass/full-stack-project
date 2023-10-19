// TODO: Put a real interfaces here
import { Request } from 'express';

export interface ITodo {
  _id?: number;
  title: string;
  description: string;
  isComplete: boolean;
  isPrivate: boolean;
}

export interface IRequestId extends Request {
  id?: string;
}

export interface IRequestTitle extends Request {
  title?: string;
}
