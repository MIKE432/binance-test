import { Injectable } from '@nestjs/common';
import {
  GetMarketPeriodProps,
  MarketPeriod,
  MarketPeriodService,
} from '../domain';

@Injectable()
export class BinanceMarketPeriodService implements MarketPeriodService {
  get({ symbol }: GetMarketPeriodProps): Promise<MarketPeriod> {
    return Promise.resolve(
      new MarketPeriod({ symbol, highPrice: 0, lowPrice: 0 }),
    );
  }
}
