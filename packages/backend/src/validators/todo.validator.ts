import Joi from 'joi';

export const todoSchema = Joi.object({
  id: Joi.string().optional(),
  title: Joi.string().min(1).max(32).required(),
  description: Joi.string().min(1).max(128).required(),
  isComplete: Joi.boolean().required(),
  isPrivate: Joi.boolean().required()
});

export const userSchema = Joi.object({
  email: Joi.string().min(1).max(255).required(),
  password: Joi.string().min(1).max(150).required()
});
