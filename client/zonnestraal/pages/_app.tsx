/* export const client = () => {
  const httpLink = createHttpLink({
    uri: "https://zonnenstraal-server.onrender.com/graphql",
    credentials: "include"
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      }
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
}

class MyApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ApolloProvider client={client}>
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

export default MyApp; */

import {BaseLayout} from '../components/Layouts';
import GlobalStyles from '../globalStyles/global'; 
import theme from '../themes/Theme';
import { ThemeProvider } from 'styled-components';
   
import App from "next/app";
import React from "react";
//import { ApolloProvider } from "react-apollo";

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