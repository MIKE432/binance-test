import { HttpStatus } from '@nestjs/common';
import { Response } from 'supertest';
import { TestApp, TestAppFactory } from './sut';

describe('Health (e2e)', () => {
  let app: TestApp;

  beforeEach(async () => {
    app = await TestAppFactory.create();
  });

  describe('when trying to get server health', () => {
    let response: Response;

    beforeEach(async () => {
      response = await app.publicRequest().get('/health');
    });

    it('should return 200', () => {
      expect(response.status).toEqual(HttpStatus.OK);
    });

    it('should return correct body', () => {
      expect(response.body).toEqual({ status: 'ok' });
    });
  });
});
