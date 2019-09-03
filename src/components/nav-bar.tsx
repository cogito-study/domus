import { Anchor, Box, Button, Flex, theme, useMinimumScreenSize } from '@cogito-study/alea';
import React, { FunctionComponent, useState } from 'react';
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

export const NavBar: FunctionComponent = () => {
  const large = useMinimumScreenSize('l');
  const [overlayMenuActive, setOverlayMenuActive] = useState(false);
  return (
    <>
      {large && (
        <NavbarContainerLarge
          alignItems="center"
          justifyContent="space-between"
          border="1px solid"
          borderColor="primary.light"
          mt={3}
          backgroundColor="white"
        >
          <Flex alignItems="center">
            <Link to="/">
              <Flex mx={7} my={3}>
                <img src="/logos/logo.svg"></img>
              </Flex>
            </Link>
            {Object.keys(pages).map((pageName, index) => (
              <Box key={index} height="22px" width="98px" textAlign="center" mr={4}>
                <StyledGatsbyLink
                  to={pages[pageName]}
                  activeClassName="active"
                  color={'grey.dark.1'}
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
            <Flex mx={8} my={3}>
              <img src="/logos/logo.svg"></img>
            </Flex>
          </Link>
          <Box mr={4} onClick={() => setOverlayMenuActive(!overlayMenuActive)}>
            {!overlayMenuActive && <img src="/logos/menu.svg"></img>}
            {overlayMenuActive && <img src="/logos/close.svg"></img>}
          </Box>
          {overlayMenuActive && (
            <OverlayMenu
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              backgroundColor="white"
            >
              <Flex flexDirection="column" justifyContent="center" flexGrow={1} alignContent="center">
                {Object.keys(pages).map((pageName, index) => (
                  <Box key={index} mb={5} textAlign="center">
                    <StyledGatsbyLink
                      to={pages[pageName]}
                      activeClassName="active"
                      color="accent.normal"
                      hoverColor="accent.dark"
                      fontWeight="bold"
                    >
                      {pageName}
                    </StyledGatsbyLink>
                  </Box>
                ))}
              </Flex>
              <Flex flexDirection="column">
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
