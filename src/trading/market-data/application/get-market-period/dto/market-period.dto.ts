import { ApiProperty } from '@nestjs/swagger';
import { MarketPeriod } from '../../../domain';

export class MarketPeriodDto {
  @ApiProperty()
  symbol: string;

  @ApiProperty()
  highPrice: number;

  @ApiProperty()
  lowPrice: number;

  static create(period: MarketPeriod): MarketPeriodDto {
    const props = period.getProps();
    return {
      symbol: props.symbol,
      highPrice: props.highPrice,
      lowPrice: props.lowPrice,
    };
  }
}
