import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rootReducer, RootState } from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
