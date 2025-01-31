import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TradingModule } from '../trading/trading.module';
import { MarketPeriodController } from './market-data/market-period.controller';

@Module({
  imports: [TradingModule],
  controllers: [HealthController, MarketPeriodController],
})
export class HttpAppModule {}
