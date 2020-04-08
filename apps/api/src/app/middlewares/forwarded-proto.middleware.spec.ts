import { ForwardedProtoMiddleware } from './forwarded-proto.middleware';

describe('ForwardedProtoMiddleware', () => {
  it('should be defined', () => {
    expect(new ForwardedProtoMiddleware()).toBeTruthy();
  });
});
