import { Module } from '@nestjs/common';
import { TradingConfigModule } from './config/config.module';
import { HealthController } from './health.controller';

@Module({
  imports: [TradingConfigModule],
  controllers: [HealthController],
})
export class AppModule {}
