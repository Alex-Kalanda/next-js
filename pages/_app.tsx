import React from "react";
import '../styles/globals.css';
import {AppProps} from "next/dist/shared/lib/router/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Create next</title>
      <link key={'main'} rel="icon" href="./favicon.ico"/>
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
