export type CoinData = {
  name: string;
  symbol: string;
  price_usd: number;
  percent_change_usd_last_24_hours: number;
  id: string;
  imgUrl: string;
};

export type Props = {
  text?: string;
  imgUrl?: string;
};
