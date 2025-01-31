import { Module } from '@nestjs/common';
import { EnvConfig } from '../../config/config';
import { GetMarketPeriodQueryHandler } from './application';
import { MarketPeriodService } from './domain';
import {
  BinanceClient,
  BinanceMarketPeriodService,
  SdkBinanceClient,
} from './infrastructure';
import { MarketDataFacade } from './market-data.facade';

@Module({
  providers: [
    MarketDataFacade,
    GetMarketPeriodQueryHandler,
    { provide: MarketPeriodService, useClass: BinanceMarketPeriodService },
    {
      provide: BinanceClient,
      inject: [EnvConfig],
      useFactory: (env: EnvConfig) =>
        new SdkBinanceClient({
          apiKey: env.BINANCE_API_KEY,
          apiSecret: env.BINANCE_API_SECRET,
        }),
    },
  ],
  exports: [MarketDataFacade],
})
export class MarketDataModule {}
