import { MarketPeriod } from './market-period';

export interface GetMarketPeriodProps {
  symbol: string;
  startDate: Date;
  endDate: Date;
}

export abstract class MarketPeriodService {
  abstract get(props: GetMarketPeriodProps): Promise<MarketPeriod>;
}
