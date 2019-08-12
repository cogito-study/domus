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
    background: white;
    font-size: 18px;
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
