import * as Joi from 'joi';
import type { Configs } from '@/types';

export const configSchema = Joi.object<Configs>({
  NODE_ENV: Joi.string().valid('dev', 'stg', 'prd').required(),
  PORT: Joi.number().integer().min(1).required(),
});
