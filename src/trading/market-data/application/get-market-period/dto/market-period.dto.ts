import { ApiProperty } from '@nestjs/swagger';
import { MarketPeriod } from '../../../domain';

export class MarketPeriodDto {
  @ApiProperty()
  symbol: string;

  @ApiProperty()
  highPrice: number;

  @ApiProperty()
  lowPrice: number;

  @ApiProperty()
  startPrice: number;

  @ApiProperty()
  endPrice: number;

  @ApiProperty()
  percentageDiff: number;

  static create(period: MarketPeriod): MarketPeriodDto {
    const props = period.getProps();
    return {
      symbol: props.symbol,
      highPrice: props.highPrice,
      lowPrice: props.lowPrice,
      percentageDiff: period.getPercentageDiff(),
      startPrice: props.startPrice,
      endPrice: props.endPrice,
    };
  }
}
