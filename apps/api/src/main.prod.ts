import { NestFactory } from '@nestjs/core';

import { AppModuleProd } from './app/app.module.prod';

async function bootstrap() {
  const app = await NestFactory.create(AppModuleProd);
  const port = process.env.PORT;
  if (!port) {
    throw new Error('No process.env.PORT provided!');
  }
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/');
  });
}

bootstrap();
