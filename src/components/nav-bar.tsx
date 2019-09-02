import { Anchor, Box, Button, Flex, theme } from '@cogito-study/alea';
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
  @media (max-width: 1023px) {
    display: none;
  }

  .active {
    color: ${theme.colors.primary.normal};
  }
`;

const NavbarContainerSmall = styled(Flex)`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavBar: FunctionComponent = () => {
  return (
    <>
      <NavbarContainerLarge
        alignItems="center"
        justifyContent="space-between"
        border="1px solid"
        borderColor="primary.light"
        mt={3}
        backgroundColor="white"
        style={{ position: 'fixed', top: 0, width: '98%' }}
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
        style={{ position: 'fixed', top: 0, width: '100%' }}
      >
        <Link to="/">
          <Flex mx={8} my={3}>
            <img src="/logos/logo.svg"></img>
          </Flex>
        </Link>
        <Box mr={4}>
          <img src="/logos/menu.svg"></img>
        </Box>
      </NavbarContainerSmall>
    </>
  );
};
