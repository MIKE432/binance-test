import { INestApplication, Type } from '@nestjs/common';
import * as request from 'supertest';

export class TestApp {
  constructor(private readonly app: INestApplication) {}

  publicRequest() {
    return request(this.app.getHttpServer());
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  getProvider<T, R = T>(type: Type<T> | symbol | string | Function): R {
    return this.app.get(type);
  }
}
