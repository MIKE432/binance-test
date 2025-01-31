import { Injectable } from '@nestjs/common';
import { MarketPeriodService } from '../../domain';
import { GetMarketPeriodQuery } from './get-market-period.query';
import { MarketPeriodDto } from './dto';

@Injectable()
export class GetMarketPeriodQueryHandler {
  constructor(private readonly marketPeriodService: MarketPeriodService) {}

  async handle(query: GetMarketPeriodQuery) {
    const period = await this.marketPeriodService.get({
      symbol: query.symbol,
      startDate: query.startDate,
      endDate: query.endDate,
    });

    return MarketPeriodDto.create(period);
  }
}
