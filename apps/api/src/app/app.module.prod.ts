import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppModule } from './app.module';
import { ForwardedProtoMiddleware } from './middlewares/forwarded-proto.middleware';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'angular-nest-herokuapp'),
    }),
    AppModule
  ]
})
export class AppModuleProd implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ForwardedProtoMiddleware)
      .forRoutes('*');
  }
}
