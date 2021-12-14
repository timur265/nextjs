import "../styles/global.scss";
import React, { FC } from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { createWrapper } from "next-redux-wrapper";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(WrappedApp);
