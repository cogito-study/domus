import { ThemeProvider as ChakraProvider } from '@chakra-ui/core';
import { Box, theme, ThemeProvider } from '@cogito-study/alea';
import React, { FunctionComponent, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { chakraTheme } from '../theme/chakra';
import { NavBar } from './nav-bar';
import { FooterSection, PartnerSection, TryOutSection } from './sections';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,500,600,700,800&display=swap');

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
    font-family: 'Nunito Sans', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    background: ${theme.colors.neutral[0]};
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

    position: ${({ overlayMenuActive }: { overlayMenuActive: boolean }) => (overlayMenuActive ? 'fixed' : 'static')};
  }
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    body {
      background-image: url('/background/top-right.svg'),
                        url('/background/bottom-right.svg'),
                        url('/background/bottom-left-mobile.svg');
      background-position: right 100px,
                           right 1200px,
                           left 2000px;
      background-repeat: no-repeat,
                         no-repeat,
                         no-repeat;
    }
  }
`;

const Layout: FunctionComponent = ({ children }) => {
  const [overlayMenuActive, setOverlayMenuActive] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={chakraTheme}>
        <>
          <GlobalStyles overlayMenuActive={overlayMenuActive} />
          <NavBar
            overlayMenuActive={overlayMenuActive}
            onMenuButtonClicked={() => setOverlayMenuActive((isOverlayMenuOpen) => !isOverlayMenuOpen)}
          />
          <Box>{children}</Box>
          <TryOutSection />
          <PartnerSection />
          <FooterSection />
        </>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default Layout;
