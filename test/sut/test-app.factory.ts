import { Test, TestingModule } from '@nestjs/testing';
import { TestApp } from './test-app';
import { AppModule } from '../../src/app.module';

export class TestAppFactory {
  static async create(): Promise<TestApp> {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const app = moduleFixture.createNestApplication();

    await app.init();

    return new TestApp(app);
  }
}
