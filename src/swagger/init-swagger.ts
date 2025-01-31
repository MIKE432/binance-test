import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

interface SwaggerConfig {
  title: string;
  version: string;
  path: string;
}

export const initSwagger = (app: INestApplication, config: SwaggerConfig) => {
  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle(config.title)
      .setVersion(config.version)
      .build(),
    {
      operationIdFactory: (controllerKey, methodKey, version?) =>
        `${controllerKey.substring(0, 1).toLowerCase()}${controllerKey.substring(1, controllerKey.length - 'Controller'.length)}_${methodKey}${version ?? ''}`,
    },
  );

  SwaggerModule.setup(config.path, app, document);
};
