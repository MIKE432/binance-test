export class MarketPeriodProps {
  symbol: string;
  highPrice: number;
  lowPrice: number;
  startPrice: number;
  endPrice: number;
}

interface ClineData {
  highPrice: number;
  lowPrice: number;
  openPrice: number;
  closePrice: number;
}

export class MarketPeriod {
  private readonly symbol: string;
  private readonly highPrice: number;
  private readonly lowPrice: number;
  private readonly startPrice: number;
  private readonly endPrice: number;

  constructor(props: MarketPeriodProps) {
    this.symbol = props.symbol;
    this.highPrice = props.highPrice;
    this.lowPrice = props.lowPrice;
    this.startPrice = props.startPrice;
    this.endPrice = props.endPrice;
  }

  static createFromCline(symbol: string, data: ClineData[]) {
    let lowPrice: number = Number.MAX_SAFE_INTEGER;
    let highPrice: number = -1;

    data.forEach((row) => {
      if (row.highPrice > highPrice) {
        highPrice = row.highPrice;
      }

      if (row.lowPrice < lowPrice) {
        lowPrice = row.lowPrice;
      }
    });

    return new MarketPeriod({
      symbol,
      lowPrice,
      highPrice,
      startPrice: data[0].openPrice,
      endPrice: data[data.length - 1].closePrice,
    });
  }

  getPercentageDiff() {
    if (this.startPrice === 0) {
      return 0;
    }
    return ((this.endPrice - this.startPrice) / this.startPrice) * 100;
  }

  getProps() {
    return {
      symbol: this.symbol,
      highPrice: this.highPrice,
      lowPrice: this.lowPrice,
      startPrice: this.startPrice,
      endPrice: this.endPrice,
    };
  }
}
