import { Box, CSSReset, ThemeProvider } from '@chakra-ui/core';
import { css, Global } from '@emotion/core';
import React, { FC, useState } from 'react';
import 'typeface-nunito-sans';
import 'typeface-raleway';
import { theme } from '../theme';
import { NavBar } from './nav-bar';
import { FooterSection, PartnerSection, TryOutSection } from './sections';

const GlobalStyles = ({ overlayMenuActive }: { overlayMenuActive: boolean }) => {
  const { breakpoints, colors } = theme;

  return (
    <Global
      styles={css`
        /* @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700,800&display=swap&subset=latin-ext'); */

        body {
          font-family: 'Nunito Sans', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif;
          background: ${colors.grey[50]};
          font-size: 18px;
          background-image: url('/background/pattern.svg'), url('/background/top-left.svg'),
            url('/background/top-right.svg'), url('/background/bottom-right.svg'),
            url('/background/bottom-left.svg');
          background-position: left, left 100px, right 100px, right 1200px, left 2000px;
          background-repeat: repeat-y, no-repeat, no-repeat, no-repeat, no-repeat;

          position: ${overlayMenuActive ? 'fixed' : 'static'};
        }

        @media only screen and (max-width: ${breakpoints[1]}) {
          body {
            background-image: url('/background/top-right.svg'), url('/background/bottom-right.svg'),
              url('/background/bottom-left-mobile.svg');
            background-position: right 100px, right 1200px, left 2000px;
            background-repeat: no-repeat, no-repeat, no-repeat;
          }
        }
      `}
    />
  );
};

const Layout: FC = ({ children }) => {
  const [overlayMenuActive, setOverlayMenuActive] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <CSSReset />
        <GlobalStyles overlayMenuActive={overlayMenuActive} />
        <NavBar
          overlayMenuActive={overlayMenuActive}
          onMenuButtonClicked={() =>
            setOverlayMenuActive((isOverlayMenuOpen) => !isOverlayMenuOpen)
          }
        />
        <Box>{children}</Box>
        <TryOutSection />
        <PartnerSection />
        <FooterSection />
      </>
    </ThemeProvider>
  );
};

export default Layout;
