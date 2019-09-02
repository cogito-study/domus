import { Box, theme, ThemeProvider } from '@cogito-study/alea';
import React, { FunctionComponent } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from '../styles/reset';

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }

  body {
    border: 0;
    margin: 0;
    padding: 0;
    color: black;
    font-family: '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    background: ${theme.colors.grey.light[4]};
    font-size: 18px;
    background-image: url('/background/pattern.svg'),
                      url('/background/top-left.svg'),
                      url('/background/top-right.svg'),
                      url('/background/bottom-right.svg'),
                      url('/background/bottom-left.svg');
    background-position: left,
                         left 100px,
                         right 100px,
                         right 1200px,
                         left 2000px;
    background-repeat: repeat-y,
                       no-repeat,
                       no-repeat,
                       no-repeat,
                       no-repeat;
  }
  @media only screen and (max-width: ${theme.breakpoints[0]}) {
    body {
      background-image: url('/background/pattern.svg'),
                        url('/background/top-right.svg'),
                        url('/background/bottom-right.svg'),
                        url('/background/bottom-left.svg');
      background-position: left,
                           right 100px,
                           right 1200px,
                           left 2000px;
      background-repeat: repeat-y,
                         no-repeat,
                         no-repeat,
                         no-repeat;
    }
  }
  
  ${reset}
`;

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Box>{children}</Box>
      </>
    </ThemeProvider>
  );
};
