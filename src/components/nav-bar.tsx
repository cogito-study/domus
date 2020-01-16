import { Box, Button, Flex, Image, Link, PseudoBox, useTheme } from '@chakra-ui/core';
import { Link as GatsbyLink } from 'gatsby';
import React, { FunctionComponent } from 'react';

const pages: Record<string, string> = {
  PRODUCT: '/',
  //BLOG: '/blog',
  //PRICING: '/pricing',
  'ABOUT US': '/about',
  CONTACT: '/contact',
};

interface NavBarProps {
  overlayMenuActive: boolean;
  onMenuButtonClicked: () => void;
}

const CompactNavBar = ({ overlayMenuActive, onMenuButtonClicked }: NavBarProps) => {
  const { colors } = useTheme();

  return (
    <Flex
      position="fixed"
      w="full"
      display={['flex', 'flex', 'flex', 'none']}
      top={0}
      zIndex={2}
      align="center"
      justify="space-between"
      borderBottom="1px solid"
      borderColor="blue.100"
      backgroundColor="white"
    >
      <GatsbyLink to="/">
        <Image src="/logos/logo.svg" mx={[4, 4, 4, 8]} my={3} w="90px" />
      </GatsbyLink>
      <Box mr={4} onClick={() => onMenuButtonClicked()}>
        {!overlayMenuActive ? <img src="/logos/menu.svg" /> : <img src="/logos/close.svg" />}
      </Box>
      {overlayMenuActive && (
        <Flex
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          w="100vw"
          h="100vh"
          zIndex={-1}
          direction="column"
          alignItems="center"
          backgroundColor="white"
          justify="space-around"
          mt={6}
        >
          <Flex direction="column" justify="center" align="center">
            {Object.keys(pages).map((pageName, index) => (
              <PseudoBox
                key={index}
                textAlign="center"
                mb={5}
                color="grey.600"
                fontFamily="heading"
                fontWeight="semibold"
                _hover={{ color: 'teal.800' }}
                _active={{ color: 'teal.600' }}
              >
                <GatsbyLink
                  to={pages[pageName]}
                  activeStyle={{ color: colors.teal[600] }}
                  onClick={() => onMenuButtonClicked()}
                >
                  {pageName}
                </GatsbyLink>
              </PseudoBox>
            ))}
          </Flex>
          <Flex direction="column" alignItems="center" mb={6}>
            <Link href="https://app.cogito.study/register" _hover={{ textDecor: 'none' }}>
              <Button
                fontFamily="heading"
                variant="solid"
                variantColor="teal"
                color="blue.800"
                w={200}
                borderRadius={0}
                mb={4}
              >
                register
              </Button>
            </Link>
            <Link href="https://app.cogito.study">
              <Button
                fontFamily="heading"
                variant="ghost"
                variantColor="blue"
                color="blue.800"
                w={200}
                borderRadius={0}
              >
                log in
              </Button>
            </Link>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

const DesktopNavBar = () => {
  const { colors } = useTheme();

  return (
    <Flex
      display={['none', 'none', 'none', 'flex']}
      position="fixed"
      top={0}
      w="98%"
      zIndex={2}
      align="center"
      justify="space-between"
      borderWidth={1}
      borderColor="blue.100"
      mt={3}
      bg="white"
    >
      <Flex alignItems="center">
        <GatsbyLink to="/">
          <Image src="/logos/logo.svg" mx={8} my={3} width="90px" />
        </GatsbyLink>
        {Object.keys(pages).map((pageName, index) => (
          <PseudoBox
            key={index}
            h={22}
            w={98}
            textAlign="center"
            mr={[0, 0, 0, 1, 4]}
            color="grey.600"
            fontFamily="heading"
            fontWeight="semibold"
            _hover={{ color: 'teal.800' }}
            _active={{ color: 'teal.600' }}
          >
            <GatsbyLink to={pages[pageName]} activeStyle={{ color: colors.teal[600] }}>
              {pageName}
            </GatsbyLink>
          </PseudoBox>
        ))}
      </Flex>
      <Flex justify="center">
        <a href="https://app.cogito.study">
          <Button
            fontFamily="heading"
            variant="ghost"
            color="blue.800"
            w={110}
            borderRadius={0}
            mr={4}
          >
            log in
          </Button>
        </a>
        <a href="https://app.cogito.study/register">
          <Button
            fontFamily="heading"
            variant="solid"
            variantColor="teal"
            w={110}
            color="blue.800"
            borderRadius={0}
            mr={8}
          >
            register
          </Button>
        </a>
      </Flex>
    </Flex>
  );
};

export const NavBar: FunctionComponent<NavBarProps> = (props) => (
  <>
    <DesktopNavBar />
    <CompactNavBar {...props} />
  </>
);
