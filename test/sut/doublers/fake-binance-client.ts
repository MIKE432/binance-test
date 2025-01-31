import {
  BinanceClient,
  KlineData,
} from '../../../src/trading/market-data/infrastructure';

export class FakeBinanceClient extends BinanceClient {
  getKlineData(): Promise<KlineData[]> {
    return Promise.resolve([
      {
        lowPrice: 0,
        highPrice: 2,
        openPrice: 1,
        closePrice: 0.5,
      },
      {
        lowPrice: 0.5,
        highPrice: 5,
        openPrice: 0.5,
        closePrice: 1,
      },
    ]);
  }
}
