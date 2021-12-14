import axios from "axios";
import { Dispatch } from "react";
import { CurrencyAction, CurrencyActionTypes } from "../../types/currency";

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    dispatch({
      type: CurrencyActionTypes.FETCH_CURRENCIES,
      payload: [
        {
          id: 1,
          name: "Bitcoin",
          symbol: "BTC",
          slug: "bitcoin",
          cmc_rank: 5,
          num_market_pairs: 500,
          circulating_supply: 16950100,
          total_supply: 16950100,
          max_supply: 21000000,
        },
      ],
    });
  };
};
