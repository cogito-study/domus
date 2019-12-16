import { Button, Link } from '@chakra-ui/core';
import { Box, Flex, theme } from '@cogito-study/alea';
import { Link as GatsbyLink } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
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
    <GatsbyLink to="/">
      <Box mx={[4, 4, 4, 8]} my={3} width="90px">
        <img src="/logos/logo.svg"></img>
      </Box>
    </GatsbyLink>
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
        <Flex flexDirection="column" alignItems="center" mb={6}>
          <Link href="https://app.cogito.study/register" _hover={{ textDecor: 'none' }}>
            <Button variant="solid" variantColor="teal" color="blue.800" w="200px" borderRadius={0} mb={4}>
              try out
            </Button>
          </Link>
          <Link href="https://app.cogito.study">
            <Button variant="ghost" variantColor="blue" w="200px" borderRadius={0}>
              log in
            </Button>
          </Link>
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
      <GatsbyLink to="/">
        <Box mx={7} my={3} width="90px">
          <img src="/logos/logo.svg"></img>
        </Box>
      </GatsbyLink>
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
    <Flex justifyContent="center">
      <a href="https://app.cogito.study">
        <Button variant="ghost" color="blue.800" w="110px" borderRadius={0} mr={4}>
          log in
        </Button>
      </a>
      <Link href="https://app.cogito.study/register" _hover={{ textDecor: 'none' }}>
        <Button variant="solid" variantColor="teal" w="110px" color="blue.800" borderRadius={0} mr={8}>
          try out
        </Button>
      </Link>
    </Flex>
  </NavbarContainerLarge>
);

export const NavBar: FunctionComponent<NavBarProps> = (props) => (
  <>
    <DesktopNavBar />
    <CompactNavBar {...props} />
  </>
);
