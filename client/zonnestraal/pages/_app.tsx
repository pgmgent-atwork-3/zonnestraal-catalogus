import type { AppProps } from 'next/app';
import {BaseLayout} from '../components/Layouts';
import GlobalStyles from '../globalStyles/global'; 
import theme from '../themes/Theme';
import { ThemeProvider } from 'styled-components';
   
import App from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BaseLayout>
              <Component {...pageProps} />
            </BaseLayout>
          </ThemeProvider>
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(MyApp);



/* import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ThemeProvider>
    </>
    )
}

export default MyApp; */