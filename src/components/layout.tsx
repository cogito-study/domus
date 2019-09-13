import { Box, theme, ThemeProvider } from '@cogito-study/alea';
import React, { FunctionComponent, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from '../styles/reset';
import { NavBar } from './nav-bar';
import { PartnerSection, TryOutSection, FooterSection } from './sections';

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

  ${reset}
`;

export const Layout: FunctionComponent = ({ children }) => {
  const [overlayMenuActive, setOverlayMenuActive] = useState(false);
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};
