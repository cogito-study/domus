import { Anchor, Box, Button, Flex, theme, useMinimumScreenSize } from '@cogito-study/alea';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StyledGatsbyLink } from './styled/styled-gatsby-link';

const pages: Record<string, string> = {
  PRODUCT: '/',
  BLOG: '/blog',
  PRICING: '/pricing',
  'ABOUT US': '/about',
  CONTACT: '/contact',
};

const NavbarContainerLarge = styled(Flex)`
  position: fixed;
  top: 0;
  width: 98%;

  .active {
    color: ${theme.colors.primary.normal};
  }
`;

const NavbarContainerSmall = styled(Flex)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
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

export const NavBar: FunctionComponent<NavBarProps> = ({ onMenuButtonClicked, overlayMenuActive }) => {
  const large = useMinimumScreenSize('l');
  return (
    <>
      {large && (
        <NavbarContainerLarge
          alignItems="center"
          justifyContent="space-between"
          border={1}
          borderColor="primary.light"
          mt={3}
          backgroundColor="white"
        >
          <Flex alignItems="center">
            <Link to="/" onClick={() => onMenuButtonClicked()}>
              <Box mx={7} my={3} width="90px">
                <img src="/logos/logo.svg"></img>
              </Box>
            </Link>
            {Object.keys(pages).map((pageName, index) => (
              <Box key={index} height="22px" width="98px" textAlign="center" mr={4}>
                <StyledGatsbyLink
                  to={pages[pageName]}
                  activeClassName="active"
                  color="grey.dark.1"
                  hoverColor="grey.dark.4"
                  fontWeight="bold"
                >
                  {pageName}
                </StyledGatsbyLink>
              </Box>
            ))}
          </Flex>
          <Flex alignItems="center">
            <Anchor href="/login" mr={6} fontWeight={600}>
              log in
            </Anchor>
            <Button mr={6}>try out!</Button>
          </Flex>
        </NavbarContainerLarge>
      )}
      {!large && (
        <NavbarContainerSmall
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderColor="primary.light"
          backgroundColor="white"
        >
          <Link to="/">
            <Box mx={8} my={3} width="90px">
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
                      color="accent.normal"
                      hoverColor="accent.dark"
                      fontWeight="bold"
                      onClick={() => onMenuButtonClicked()}
                    >
                      {pageName}
                    </StyledGatsbyLink>
                  </Box>
                ))}
              </Flex>
              <Flex flexDirection="column" mb={6}>
                <Button variant="secondary" mb={4}>
                  log in
                </Button>
                <Button mb={6}>try out!</Button>
              </Flex>
            </OverlayMenu>
          )}
        </NavbarContainerSmall>
      )}
    </>
  );
};
