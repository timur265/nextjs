export enum CurrencyActionTypes {
  FETCH_CURRENCIES = "FETCH_CURRENCIES",
}

export interface IСurrency {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmc_rank: number;
  num_market_pairs: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
}
interface FetchAction {
  type: CurrencyActionTypes.FETCH_CURRENCIES;
  payload: IСurrency[];
}

export interface CurrencyState {
  currencies: IСurrency[];
}

export type CurrencyAction = FetchAction;
