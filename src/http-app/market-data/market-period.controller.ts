import { Controller, Get, Query } from '@nestjs/common';
import { MarketDataFacade } from '../../trading/market-data/market-data.facade';
import { GetMarketPeriodQueryDto } from './dto';
import { MarketPeriodDto } from '../../trading/market-data/application';
import { ApiResponse } from '@nestjs/swagger';

@Controller('period')
export class MarketPeriodController {
  constructor(private readonly marketDataFacade: MarketDataFacade) {}

  @Get()
  @ApiResponse({ type: MarketPeriodDto })
  getPeriod(@Query() query: GetMarketPeriodQueryDto): Promise<MarketPeriodDto> {
    return this.marketDataFacade.getPeriod(query);
  }
}
