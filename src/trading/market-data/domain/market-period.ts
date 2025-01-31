export class MarketPeriodProps {
  symbol: string;
  highPrice: number;
  lowPrice: number;
}

interface ClineData {
  highPrice: number;
  lowPrice: number;
}

export class MarketPeriod {
  private readonly symbol: string;
  private readonly highPrice: number;
  private readonly lowPrice: number;

  constructor(props: MarketPeriodProps) {
    this.symbol = props.symbol;
    this.highPrice = props.highPrice;
    this.lowPrice = props.lowPrice;
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
    });
  }

  getProps() {
    return {
      symbol: this.symbol,
      highPrice: this.highPrice,
      lowPrice: this.lowPrice,
    };
  }
}
