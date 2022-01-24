import { createGlobalStyle } from 'styled-components';
import theme from '../themes/Theme';

export type MyProps = {
    theme: typeof theme
}


const GlobalStyle = createGlobalStyle<MyProps>`
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap');
 */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
}

h1,
h2,
h3 {
  font-family: 'Montserrat', sans-serif;
}

h1 {
  font-size: ${({ theme }) => theme.fontSizes.headline4};
  line-height: 1.2;
  font-weight: 400;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.margins.small};

  @media (min-width: ${({ theme }) => theme.width.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.headline3};
  }
}

h2 {
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.headline5};
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.margins.small};

  @media (min-width: ${({ theme }) => theme.width.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.headline4};
    margin-bottom: ${({ theme }) => theme.margins.medium};
  }
}

h3 {
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.margins.small};

  @media (min-width: ${({ theme }) => theme.width.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  }
}

ul {
  list-style: none;
}

span {
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.5;
}

input {
  height: 2.5rem;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  margin-top: ${({ theme }) => theme.margins.extraSmall};
  margin-bottom: ${({ theme }) => theme.margins.extraSmall};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 0.5rem 1rem;
  outline: none;
}

label {
  display: inline-block;
  margin-top: ${({ theme }) => theme.margins.small};
}

p {
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: 1.5;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.red};
}

img {
  width: 100%;
}

input, textarea {
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.body};
}

button {
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.buttonText};
}
`

export default GlobalStyle;