import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService]
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return a timestamp message', () => {
      const { message } = service.getData();
      expect(message.startsWith('Welcome to api! The time is ')).toBeTruthy();
    });
  });
});
