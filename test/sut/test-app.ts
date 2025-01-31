import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

export class TestApp {
  constructor(private readonly app: INestApplication) {}

  publicRequest() {
    return request(this.app.getHttpServer());
  }
}
