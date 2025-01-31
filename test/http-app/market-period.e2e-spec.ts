import { HttpStatus } from '@nestjs/common';
import { Response } from 'supertest';
import { TestApp, TestAppFactory } from '../../test/sut';

describe('Market Period (e2e)', () => {
  let app: TestApp;

  beforeEach(async () => {
    app = await TestAppFactory.create();
  });

  describe('when trying to fetch data for symbol', () => {
    const symbol = 'symbol';

    let response: Response;

    beforeEach(async () => {
      response = await app.publicRequest().get('/period').query({
        symbol,
        startDate: '2024-01-01',
        endDate: '2024-01-02',
      });
    });

    it('should correctly return data', () => {
      expect(response.status).toEqual(HttpStatus.OK);
      expect(response.body).toEqual({
        symbol,
        highPrice: 5,
        lowPrice: 0,
        percentageDiff: 0,
        startPrice: 1,
        endPrice: 1,
      });
    });
  });
});
