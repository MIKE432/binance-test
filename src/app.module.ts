import { Module } from '@nestjs/common';
import { TradingConfigModule } from './config/config.module';
import { HttpAppModule } from './http-app/http-app';

@Module({
  imports: [TradingConfigModule, HttpAppModule],
})
export class AppModule {}
