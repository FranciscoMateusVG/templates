import '../styles/global.css';
import 'tailwindcss/tailwind.css';
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'next-auth/client';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import { useDarkModeState } from '../globalStates/darkMode/darkMode';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const darkModeState = useDarkModeState();
  return (
    <>
      <Head>
        <title>Default Project</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <ThemeProvider theme={darkModeState.get() ? darkTheme : lightTheme}>
        <CssBaseline />
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
