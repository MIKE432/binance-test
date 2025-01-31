export interface GetKlineDataProps {
  symbol: string;
  startTime: number;
  endTime: number;
}

export interface KlineData {
  lowPrice: number;
  highPrice: number;
}

export abstract class BinanceClient {
  abstract getKlineData(props: GetKlineDataProps): Promise<KlineData[]>;
}
