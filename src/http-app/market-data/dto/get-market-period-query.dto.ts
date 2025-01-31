import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';
import { IsAfter } from '../../../common';

export class GetMarketPeriodQueryDto {
  @ApiProperty()
  @IsString()
  symbol: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  @IsAfter('startDate')
  endDate: Date;
}
