import { Anchor, Box, Button, Flex, theme } from '@cogito-study/alea';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StyledGatsbyLink } from './styled/styled-gatsby-link';

const pages: Record<string, string> = {
  PRODUCT: '/',
  //BLOG: '/blog',
  //PRICING: '/pricing',
  'ABOUT US': '/about',
  CONTACT: '/contact',
};

const NavbarContainerLarge = styled(Flex)`
  display: none;
  position: fixed;
  top: 0;
  width: 98%;
  z-index: 2;

  .active {
    color: ${theme.colors.accent[6]};
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    display: flex;
  }
`;

const NavbarContainerSmall = styled(Flex)`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  .active {
    color: ${theme.colors.accent[6]};
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    display: none;
  }
`;

const OverlayMenu = styled(Flex)`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;
interface NavBarProps {
  overlayMenuActive: boolean;
  onMenuButtonClicked: () => void;
}

const CompactNavBar = ({ overlayMenuActive, onMenuButtonClicked }: NavBarProps) => (
  <NavbarContainerSmall
    alignItems="center"
    justifyContent="space-between"
    borderBottom="1px solid"
    borderColor="primary.1"
    backgroundColor="white"
  >
    <Link to="/">
      <Box mx={[4, 4, 4, 8]} my={3} width="90px">
        <img src="/logos/logo.svg"></img>
      </Box>
    </Link>
    <Box mr={4} onClick={() => onMenuButtonClicked()}>
      {!overlayMenuActive ? <img src="/logos/menu.svg" /> : <img src="/logos/close.svg" />}
    </Box>
    {overlayMenuActive && (
      <OverlayMenu
        flexDirection="column"
        alignItems="center"
        backgroundColor="white"
        justifyContent="space-around"
        mt={6}
      >
        <Flex flexDirection="column" justifyContent="center" alignContent="center">
          {Object.keys(pages).map((pageName, index) => (
            <Box key={index} mb={5} textAlign="center">
              <StyledGatsbyLink
                to={pages[pageName]}
                activeClassName="active"
                color="neutral.6"
                hoverColor="accent.8"
                fontWeight="600"
                onClick={() => onMenuButtonClicked()}
              >
                {pageName}
              </StyledGatsbyLink>
            </Box>
          ))}
        </Flex>
        <Flex flexDirection="column" mb={6}>
          <Anchor href="https://app.cogito.study">
            <Button variant="secondary" mb={4}>
              log in
            </Button>
          </Anchor>
          <Anchor href="/#tryout">
            <Button mb={6} onClick={() => onMenuButtonClicked()}>
              try out!
            </Button>
          </Anchor>
        </Flex>
      </OverlayMenu>
    )}
  </NavbarContainerSmall>
);

const DesktopNavBar = () => (
  <NavbarContainerLarge
    alignItems="center"
    justifyContent="space-between"
    border={1}
    borderColor="primary.1"
    mt={3}
    backgroundColor="white"
  >
    <Flex alignItems="center">
      <Link to="/">
        <Box mx={7} my={3} width="90px">
          <img src="/logos/logo.svg"></img>
        </Box>
      </Link>
      {Object.keys(pages).map((pageName, index) => (
        <Box key={index} height="22px" width="98px" textAlign="center" mr={[0, 0, 0, 1, 4]}>
          <StyledGatsbyLink
            to={pages[pageName]}
            activeClassName="active"
            color="neutral.6"
            hoverColor="accent.8"
            fontWeight="600"
          >
            {pageName}
          </StyledGatsbyLink>
        </Box>
      ))}
    </Flex>
    <Flex alignItems="center">
      <Anchor href="https://app.cogito.study" mr={6} fontWeight={600}>
        <Button variant="tertiary">log in</Button>
      </Anchor>
      <Anchor href="/#tryout">
        <Button mr={6}>try out!</Button>
      </Anchor>
    </Flex>
  </NavbarContainerLarge>
);

export const NavBar: FunctionComponent<NavBarProps> = (props) => (
  <>
    <DesktopNavBar />
    <CompactNavBar {...props} />
  </>
);
