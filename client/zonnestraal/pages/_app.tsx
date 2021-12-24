import type { AppProps } from 'next/app';
import {BaseLayout} from '../components/Layouts';
import GlobalStyles from '../globalStyles/global'; 
import theme from '../themes/Theme';

import { ThemeProvider } from 'styled-components';

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

export default MyApp
