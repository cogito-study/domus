import { Anchor, Box, Button, Flex } from '@cogito-study/alea';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { CogitoLogo, MenuLogo } from './logos';
import { Link } from 'gatsby';

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
          <a href="/">
            <CogitoLogo />
          </a>
          {Object.keys(pages).map((pageName, index) => (
            <Box key={index} height="22px" width="98px" textAlign="center" mr={4}>
              <Link to={pages[pageName]} activeClassName="active">
                <Anchor
                  href={pages[pageName]}
                  color={'grey.dark.1'} // TODO ezt majd cserélni kell
                  hoverColor="grey.dark.4"
                  fontWeight="bold"
                >
                  {pageName}
                </Anchor>
              </Link>
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
        <a href="/">
          <CogitoLogo />
        </a>
        <Box mr={4}>
          <MenuLogo />
        </Box>
      </NavbarContainerSmall>
    </>
  );
};
