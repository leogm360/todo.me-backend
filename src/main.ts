import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { Configs } from '@/types';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication<AppModule>>(AppModule);

  const configService = app.get<ConfigService<Configs>>(ConfigService);

  await app.listen(configService.get('PORT'));

  const nodeEnv = configService.get('NODE_ENV');

  if (['dev', 'stg'].includes(nodeEnv)) {
    console.log('');
    console.log(`🌱 Environment up on: ${nodeEnv}`);
    console.log(
      `🚀 Server is up at: ${(await app.getUrl()).replace(
        /(127\.0\.0\.1|\[::1\]|0\.0\.0\.0)/g,
        'localhost',
      )}`,
    );
  }
}

bootstrap();
