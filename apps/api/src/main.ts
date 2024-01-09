/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({ origin: '*' });

  const config = new DocumentBuilder()
    .setTitle('Basic Template Angular Nest in Nx')
    .setDescription('The basic template API description')
    .setVersion('1.0')
    .addTag('template')
    .setContact(
      'Danilo Ribeiro',
      'https://github.com/dmax101',
      'danriba@gmail.com'
    )
    .build();

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
