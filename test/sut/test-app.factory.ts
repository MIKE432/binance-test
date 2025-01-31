import { Test, TestingModule } from '@nestjs/testing';
import { TestApp } from './test-app';
import { AppModule } from '../../src/app.module';
import { BinanceClient } from '../../src/trading/market-data/infrastructure';
import { FakeBinanceClient } from './doublers';

export class TestAppFactory {
  static async create(): Promise<TestApp> {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(BinanceClient)
      .useClass(FakeBinanceClient)
      .compile();

    const app = moduleFixture.createNestApplication();

    await app.init();

    return new TestApp(app);
  }
}
