import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  GetMarketPeriodProps,
  MarketPeriod,
  MarketPeriodService,
} from '../domain';
import { BinanceClient } from './binance-client';
import * as dayjs from 'dayjs';

@Injectable()
export class BinanceMarketPeriodService implements MarketPeriodService {
  constructor(private readonly binanceClient: BinanceClient) {}

  async get({
    symbol,
    startDate,
    endDate,
  }: GetMarketPeriodProps): Promise<MarketPeriod> {
    try {
      const klineData = await this.binanceClient.getKlineData({
        symbol,
        startTime: dayjs(startDate).startOf('D').unix() * 1000,
        endTime: dayjs(endDate).endOf('D').unix() * 1000,
      });

      return MarketPeriod.createFromCline(symbol, klineData);
    } catch (e) {
      //handle error correctly (some sentry???)

      throw new InternalServerErrorException('Binance api returned error', e);
    }
  }
}
