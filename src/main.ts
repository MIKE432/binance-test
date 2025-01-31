import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSwagger(app, {
    title: 'API',
    version: '1.0',
    path: 'api-docs',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: false,
      stopAtFirstError: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
