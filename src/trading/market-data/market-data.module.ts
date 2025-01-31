import { Module } from '@nestjs/common';
import { MarketDataFacade } from './market-data.facade';
import { GetMarketPeriodQueryHandler } from './application';
import { MarketPeriodService } from './domain';
import { BinanceMarketPeriodService } from './infrastructure';

@Module({
  providers: [
    MarketDataFacade,
    GetMarketPeriodQueryHandler,
    { provide: MarketPeriodService, useClass: BinanceMarketPeriodService },
  ],
  exports: [MarketDataFacade],
})
export class MarketDataModule {}
