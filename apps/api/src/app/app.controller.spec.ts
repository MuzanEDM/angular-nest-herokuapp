import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();
  });

  describe('getData', () => {
    it('should return a timestamp message', () => {
      const appController = app.get<AppController>(AppController);
      const { message } = appController.getData();
      expect(message.startsWith('Welcome to api! The time is ')).toBeTruthy();
    });
  });
});
