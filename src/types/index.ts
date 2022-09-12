export type Market_data = {
  price_usd: number;
  percent_change_usd_last_24_hours: number;
};

export type Metrics = {
  market_data: Market_data;
};

export type CoinData = {
  name: string;
  symbol: string;
  price_usd: number;
  percent_change_usd_last_24_hours: number;
  id: string;
  imgUrl: string;
  metrics: Metrics;
  market_data: Market_data;
};

export type Props = {
  text?: string;
  imgUrl?: string;
};
