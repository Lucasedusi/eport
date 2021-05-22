import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }

  body {
    background: ${({ theme }) => theme.colors.secondaryVariant};
    color: ${({ theme }) => theme.colors.textOnSecondary};
  }

  .active-link {
    color: ${({ theme }) => theme.colors.primaryVariant};
  }
`;
