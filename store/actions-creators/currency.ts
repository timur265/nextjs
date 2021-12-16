import axios from "axios";
import { Dispatch } from "react";
import { CurrencyAction, CurrencyActionTypes } from "../../types/currency";

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "08858f55-c0c2-42aa-81f5-717a20f14644",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          limit: 10,
        },
      }
    );
    dispatch({
      type: CurrencyActionTypes.FETCH_CURRENCIES,
      payload: response.data.data,
    });
  };
};

export const fetchCurrencyData = (currencyId: string) => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "08858f55-c0c2-42aa-81f5-717a20f14644",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          id: currencyId,
        },
      }
    );

    dispatch({
      type: CurrencyActionTypes.FETCH_CURRENCY_DATA,
      payload: response.data.data[currencyId],
    });
  };
};

export const setCurrencyData = (currencyData: []) => {
  return {
    type: CurrencyActionTypes.SET_CURRENCY_DATA,
    payload: currencyData,
  };
};
