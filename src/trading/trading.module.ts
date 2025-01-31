import { Module } from '@nestjs/common';
import { MarketDataModule } from './market-data/market-data.module';

const modules = [MarketDataModule];

@Module({
  imports: modules,
  exports: modules,
})
export class TradingModule {}
