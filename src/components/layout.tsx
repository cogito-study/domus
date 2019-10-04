import { Box, ThemeProvider } from '@chakra-ui/core';
import { css, Global } from '@emotion/core';
import React, { FunctionComponent, useState } from 'react';
import reset from '../styles/reset';
import { theme } from '../styles/theme';
import { NavBar } from './nav-bar';
import { FooterSection, PartnerSection, TryOutSection } from './sections';

const globalStyles = css`
  ${reset}
  * {
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,500,600,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap');
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  button {
    font-family: ${theme.fonts.heading};
  }

  p {
    font-family: ${theme.fonts.body};
  }
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
    font-family: ${theme.fonts.body};
    background: ${theme.colors.neutral[0]};
    font-size: 18px;
    background-image: url('/background/pattern.svg'), url('/background/top-left.svg'), url('/background/top-right.svg'),
      url('/background/bottom-right.svg'), url('/background/bottom-left.svg');
    background-position: left, left 100px, right 100px, right 1200px, left 2000px;
    background-repeat: repeat-y, no-repeat, no-repeat, no-repeat, no-repeat;
  }

  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    body {
      background-image: url('/background/top-right.svg'), url('/background/bottom-right.svg'),
        url('/background/bottom-left-mobile.svg');
      background-position: right 100px, right 1200px, left 2000px;
      background-repeat: no-repeat, no-repeat, no-repeat;
    }
  }
`;

const Layout: FunctionComponent = ({ children }) => {
  const [overlayMenuActive, setOverlayMenuActive] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global styles={globalStyles} />
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

export default Layout;
