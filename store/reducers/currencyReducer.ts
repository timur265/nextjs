import {
  CurrencyAction,
  CurrencyActionTypes,
  CurrencyState,
} from "../../types/currency";

const initialState: CurrencyState = {
  currencies: [],
};

export default function (
  state = initialState,
  action: CurrencyAction
): CurrencyState {
  switch (action.type) {
    case CurrencyActionTypes.FETCH_CURRENCIES:
      return { ...state, currencies: action.payload };
    default:
      return state;
  }
}
