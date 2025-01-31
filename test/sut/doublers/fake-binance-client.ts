import {
  BinanceClient,
  KlineData,
} from '../../../src/trading/market-data/infrastructure';

export class FakeBinanceClient extends BinanceClient {
  private isThrowingError: boolean;

  getKlineData(): Promise<KlineData[]> {
    if (this.isThrowingError) {
      throw new Error('Some binance error');
    }

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

  shouldThrowError(isThrowingError: boolean) {
    this.isThrowingError = isThrowingError;
  }
}
