import { ForwardedProtoMiddleware } from './forwarded-proto.middleware';

describe('ForwardedProtoMiddleware', () => {
  let forwardedProtoMiddleware: ForwardedProtoMiddleware;

  beforeEach(() => {
    forwardedProtoMiddleware = new ForwardedProtoMiddleware();
  })
  it('should be defined', () => {
    expect(forwardedProtoMiddleware).toBeTruthy();
  });
  it('should do nothing without x-forwarded-proto provided', () => {
    const req = { headers: {} };
    const res = { redirect: jest.fn() };
    const next = jest.fn();
    forwardedProtoMiddleware.use(req, res, next);
    expect(res.redirect).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
  it('should do nothing if x-forwarded-proto is not http', () => {
    const req = { headers: { 'x-forwarded-proto': 'ftp' } };
    const res = { redirect: jest.fn() };
    const next = jest.fn();
    forwardedProtoMiddleware.use(req, res, next);
    expect(res.redirect).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
  it('should call the redirect method with given data', () => {
    const hostname = Date.now(); // dynamic value
    const url = Date.now() * 2; // dynamic value
    const req = { hostname, headers: { 'x-forwarded-proto': 'http' }, url };
    const res = { redirect: jest.fn() };
    const next = jest.fn();
    forwardedProtoMiddleware.use(req, res, next);
    expect(res.redirect).toHaveBeenCalledWith(`https://${hostname}${url}`);
    expect(next).not.toHaveBeenCalled();
  });
});
