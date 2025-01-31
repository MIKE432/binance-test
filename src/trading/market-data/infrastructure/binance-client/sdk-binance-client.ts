import { Interval, Spot } from '@binance/connector-typescript';
import { BinanceClient, GetKlineDataProps, KlineData } from './binance-client';
import { InternalServerErrorException } from '@nestjs/common';

interface Config {
  apiKey: string;
  apiSecret: string;
}

const DEFAULT_INTERVAL = Interval['1d'];

export class SdkBinanceClient implements BinanceClient {
  private readonly client: Spot;

  constructor(config: Config) {
    this.client = new Spot(config.apiKey, config.apiSecret);
  }

  async getKlineData({
    symbol,
    startTime,
    endTime,
  }: GetKlineDataProps): Promise<KlineData[]> {
    try {
      const result = await this.client.klineCandlestickData(
        symbol,
        DEFAULT_INTERVAL,
        {
          startTime,
          endTime,
        },
      );

      return result.map(([_, openPrice, highPrice, lowPrice, closePrice]) => ({
        highPrice: Number.parseFloat(highPrice as string),
        lowPrice: Number.parseFloat(lowPrice as string),
        openPrice: Number.parseFloat(openPrice as string),
        closePrice: Number.parseFloat(closePrice as string),
      }));
    } catch (e) {
      //handle error correctly (some sentry???)

      throw new InternalServerErrorException('Binance api returned error', e);
    }
  }
}
