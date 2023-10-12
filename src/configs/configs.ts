import { env } from 'node:process';
import { Configs } from '@/types';

export const configs = (): Configs => ({
  NODE_ENV: env.NODE_ENV as Configs['NODE_ENV'],
  PORT: parseInt(env.PORT, 10) ?? 3000,
});
