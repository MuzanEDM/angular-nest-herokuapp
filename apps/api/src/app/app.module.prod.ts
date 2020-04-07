import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppModule } from './app.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'angular-nest-herokuapp'),
    }),
    AppModule
  ]
})
export class AppModuleProd {}
