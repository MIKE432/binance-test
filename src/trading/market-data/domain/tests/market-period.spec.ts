import { KlineData } from '../../infrastructure';
import { MarketPeriod } from '../market-period';

const data: KlineData[] = [
  {
    closePrice: 1,
    highPrice: 5,
    lowPrice: 0,
    openPrice: 1,
  },
  {
    closePrice: 1,
    highPrice: 7,
    lowPrice: 3,
    openPrice: 1,
  },
  {
    closePrice: 5,
    highPrice: 5,
    lowPrice: 0,
    openPrice: 1,
  },
  {
    closePrice: 2,
    highPrice: 7,
    lowPrice: 3,
    openPrice: 5,
  },
];

describe('Market Period', () => {
  let marketPeriod: MarketPeriod;

  describe('when trying to create market period from cline data', () => {
    beforeEach(() => {
      marketPeriod = MarketPeriod.createFromCline('symbol', data);
    });

    it('should correctly calculate high price', () => {
      expect(marketPeriod.getProps().highPrice).toEqual(7);
    });

    it('should correctly calculate low price', () => {
      expect(marketPeriod.getProps().lowPrice).toEqual(0);
    });

    it('should correctly calculate start price', () => {
      expect(marketPeriod.getProps().startPrice).toEqual(1);
    });

    it('should correctly calculate end price', () => {
      expect(marketPeriod.getProps().endPrice).toEqual(2);
    });

    it('should correctly calculate percentage diff', () => {
      expect(marketPeriod.getPercentageDiff()).toEqual(100);
    });
  });

  describe('when created market period with all 0 as values', () => {
    beforeEach(() => {
      marketPeriod = new MarketPeriod({
        symbol: 'symbol',
        highPrice: 0,
        lowPrice: 0,
        startPrice: 0,
        endPrice: 0,
      });
    });

    it('should correctly calculate percentage diff', () => {
      expect(marketPeriod.getPercentageDiff()).toEqual(0);
    });
  });
});
