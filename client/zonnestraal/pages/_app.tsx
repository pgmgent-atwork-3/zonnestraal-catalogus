import {BaseLayout} from '../components/Layouts';
import GlobalStyles from '../globalStyles/global'; 
import theme from '../themes/Theme';
import { ThemeProvider } from 'styled-components';
   
import App from "next/app";
import React from "react";

// Authprovider is a wrapper with new apollo client and settings for the header
import {AuthProvider} from '../lib/auth';


class MyApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BaseLayout>
              <Component {...pageProps} />
            </BaseLayout>
          </ThemeProvider>
        </AuthProvider>
      </>
    );
  }
}

export default MyApp;