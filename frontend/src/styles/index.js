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

  header {
    .bm-overlay, .bm-menu-wrap {
      top: 0;
    }

    /* Position and sizing of burger button */
    .bm-burger-button {
      position: fixed;
      width: 26px;
      height: 20px;
      left: 18px;
      top: 18px;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: ${({ theme }) => theme.colors.textOnSecondary};
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
      background: ${({ theme }) => theme.colors.primary};
    }

    /* Color/shape of close button cross */
    .bm-cross {
      background: ${({ theme }) => theme.colors.secondary};
    }

    /* General sidebar styles */
    .bm-menu {
      background: ${({ theme }) => theme.colors.textOnSecondary};
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;

      a {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.secondary};

        &.active-link {
          color: ${({ theme }) => theme.colors.primaryVariant};
        }
      }
    }

    /* Wrapper for item list */
    .bm-item-list {
      color: #b8b7ad;
      padding: 0.2rem;
    }

    /* Individual item */
    .bm-item {
      display: inline-block;
      margin-bottom: 0.75rem;
    }

    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;
