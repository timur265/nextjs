import {
  CurrencyAction,
  CurrencyActionTypes,
  CurrencyState,
} from "../../types/currency";

const initialState: CurrencyState = {
  currencies: [],
  currencyData: { data: [], dates: [], prices: [] },
};

const formattedTime = (time: string) => {
  const newDate = new Date(time);
  const currentMonth = newDate.getMonth() + 1;
  const currentSeconds =
    newDate.getSeconds() < 10
      ? "0" + newDate.getSeconds()
      : newDate.getSeconds();
  const formattedDate =
    newDate.getDate() +
    "-" +
    currentMonth +
    "-" +
    newDate.getFullYear() +
    " / " +
    newDate.getHours() +
    "-" +
    newDate.getMinutes() +
    "-" +
    currentSeconds;

  return formattedDate;
};

export default function (
  state = initialState,
  action: CurrencyAction
): CurrencyState {
  switch (action.type) {
    case CurrencyActionTypes.FETCH_CURRENCIES:
      return { ...state, currencies: action.payload };
    case CurrencyActionTypes.FETCH_CURRENCY_DATA:
      action.payload.last_updated = formattedTime(action.payload.last_updated);
      action.payload.quote.USD.price =
        Math.round((action.payload.quote.USD.price + Number.EPSILON) * 10000) /
        10000;
      const localStorageCurrencyData = localStorage.getItem("currencyData")
        ? JSON.parse(localStorage.getItem("currencyData"))
        : [];
      const currencyData = [action.payload, ...localStorageCurrencyData];
      const filteredCurrencyData = currencyData.filter((value) => {
        return value.id == action.payload.id;
      });
      localStorage.setItem(
        "currencyData",
        JSON.stringify(filteredCurrencyData)
      );
      const dates = [];
      const prices = [];
      filteredCurrencyData.map((currency) => {
        dates.push(currency.last_updated);
        prices.push(currency.quote.USD.price);
      });
      return {
        ...state,
        currencyData: {
          data: filteredCurrencyData,
          dates: dates,
          prices: prices,
        },
      };
    case CurrencyActionTypes.SET_CURRENCY_DATA:
      return {
        ...state,
        currencyData: { data: action.payload, dates: [], prices: [] },
      };
    default:
      return state;
  }
}
