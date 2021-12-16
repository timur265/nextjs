export enum CurrencyActionTypes {
  FETCH_CURRENCIES = "FETCH_CURRENCIES",
  FETCH_CURRENCY_DATA = "FETCH_CURRENCY_DATA",
  SET_CURRENCY_DATA = "SET_CURRENCY_DATA",
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
  last_updated: string;
  quote: {
    USD: {
      fully_diluted_market_cap: number;
      last_updated: string;
      price: number;
      volume_24h: number;
      volume_change_24h: number;
    };
  };
}
interface FetchCurrenciesAction {
  type: CurrencyActionTypes.FETCH_CURRENCIES;
  payload: IСurrency[];
}

interface FetchCurrencyAction {
  type: CurrencyActionTypes.FETCH_CURRENCY_DATA;
  payload: { id: number; last_updated: string };
}

interface SetCurrencyAction {
  type: CurrencyActionTypes.SET_CURRENCY_DATA;
  payload: [];
}
export interface CurrencyState {
  currencies: IСurrency[];
  currencyData: any[];
}

export type CurrencyAction =
  | FetchCurrenciesAction
  | FetchCurrencyAction
  | SetCurrencyAction;
