import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TradingModule } from 'src/trading/trading.module';

@Module({
  imports: [TradingModule],
  controllers: [HealthController],
})
export class HttpAppModule {}
