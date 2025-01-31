import { Injectable } from '@nestjs/common';
import {
  GetMarketPeriodQuery,
  GetMarketPeriodQueryHandler,
  MarketPeriodDto,
} from './application';

@Injectable()
export class MarketDataFacade {
  constructor(
    private readonly getMarketPeriodQueryHandler: GetMarketPeriodQueryHandler,
  ) {}

  getPeriod(query: GetMarketPeriodQuery): Promise<MarketPeriodDto> {
    return this.getMarketPeriodQueryHandler.handle(query);
  }
}
