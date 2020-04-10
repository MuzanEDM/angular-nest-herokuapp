import { Injectable } from '@nestjs/common';
import { Message } from '@angular-nest-herokuapp/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: `Welcome to api! The time is ${new Date()}` };
  }
}
