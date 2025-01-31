export class MarketPeriodProps {
  symbol: string;
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

  getProps() {
    return {
      symbol: this.symbol,
      highPrice: this.highPrice,
      lowPrice: this.lowPrice,
    };
  }
}
