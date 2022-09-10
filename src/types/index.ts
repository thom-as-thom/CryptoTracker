export type CoinData = {
  name: string;
  symbol: string;
  price_usd: number;
  percent_change_usd_last_24_hours: number;
  id: string;
  imgUrl: string;
  data: object;
  metrics: object;
  market_data: object;
};

export type Props = {
  text?: string;
  imgUrl?: string;
};
