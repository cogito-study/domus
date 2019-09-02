import { Anchor, Box, Button, Flex, theme } from '@cogito-study/alea';
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
  @media (max-width: 1023px) {
    display: none;
  }

  .active {
    color: ${theme.colors.primary.normal};
  }
`;

const NavbarContainerSmall = styled(Flex)`
  position: fixed;
  top: 0;
  width: 100%;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const OverlayMenu = styled(Flex)`
  position: fixed;
  top: 62px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100vw;
  height: 100vh;
`;

export const NavBar: FunctionComponent = () => {
  const [overlayMenuActive, setOverlayMenuActive] = useState(false);
  return (
    <>
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
            <Flex mx={8} my={3}>
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
          <OverlayMenu flexDirection="column" alignItems="center" alignContent="space-between" backgroundColor="white">
            <Flex flexDirection="column" flexGrow={2} justifyContent="center">
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
            <Flex flexDirection="column" style={{ position: 'fixed', bottom: 0 }}>
              <Button variant="secondary" mb={3}>
                log in
              </Button>
              <Button mb={3}>try out!</Button>
              <Flex mb={2}>
                <Anchor mr={2}>English</Anchor>
                <Anchor mr={2}>Hungarian</Anchor>
                <Anchor mr={2}>Romanian</Anchor>
              </Flex>
            </Flex>
          </OverlayMenu>
        )}
      </NavbarContainerSmall>
    </>
  );
};
