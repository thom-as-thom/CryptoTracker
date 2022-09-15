export type Market_data = {
  price_usd: number;
  percent_change_usd_last_24_hours: number;
};

export type Asset = {
  name: string;
  symbol: string;
  id: string;
};

export type CoinData = {
  price_usd: number;
  percent_change_usd_last_24_hours: number;
  imgUrl: string;
  name: string;
  symbol: string;
  id: string;
  market_data: Market_data;
  Asset: Asset;
};

export type Props = {
  text?: string;
  imgUrl?: string;
  onClick?: Function;
  type?: 'navigation' | 'regular';
  disabled?: boolean;
};
