import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ForwardedProtoMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    if (req.headers['x-forwarded-proto'] === 'http') {
      return res.redirect(`https://${req.hostname}${req.url}`);
    }
    next();
  }
}
