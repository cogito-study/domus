import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  PseudoBox,
  useTheme,
} from '@chakra-ui/core';
import { Location, WindowLocation } from '@reach/router';
import { Link as GatsbyLink, navigate } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { FiGlobe } from 'react-icons/fi';
import i18n from '../../config/i18n.js';

interface NavBarProps {
  overlayMenuActive: boolean;
  onMenuButtonClicked: () => void;
}

const languagePath = (location: WindowLocation) => {
  const firstPathComponent = location.pathname.split('/').filter(Boolean)[0];
  return firstPathComponent === 'en' || firstPathComponent === 'hu' ? firstPathComponent : 'en';
};

const locationToTranslations = (location: WindowLocation) => {
  const langPath = languagePath(location);
  const langKey = langPath === 'en' ? 'en-us' : langPath === 'hu' ? 'hu' : langPath;
  return i18n[langKey];
};

const CompactNavBar = ({ overlayMenuActive, onMenuButtonClicked }: NavBarProps) => {
  const { colors } = useTheme();

  return (
    <Location>
      {({ location }) => (
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
                {Object.keys(locationToTranslations(location).pages).map((key) => (
                  <PseudoBox
                    key={key}
                    textAlign="center"
                    mb={5}
                    color="grey.600"
                    fontFamily="heading"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    _hover={{ color: 'teal.800' }}
                    _active={{ color: 'teal.600' }}
                  >
                    <GatsbyLink
                      to={`/${languagePath(location)}/${key}`}
                      activeStyle={{ color: colors.teal[600] }}
                      onClick={() => onMenuButtonClicked()}
                    >
                      {locationToTranslations(location).pages[key]}
                    </GatsbyLink>
                  </PseudoBox>
                ))}
              </Flex>
              <Flex direction="column" alignItems="center" mb={6}>
                <Button
                  as="a"
                  // @ts-ignore
                  href="https://app.cogito.study/register"
                  fontFamily="heading"
                  variant="solid"
                  variantColor="teal"
                  color="blue.800"
                  w={200}
                  borderRadius={0}
                  mb={4}
                >
                  {locationToTranslations(location).buttons.register}
                </Button>
                <Button
                  as="a"
                  // @ts-ignore
                  href="https://app.cogito.study"
                  fontFamily="heading"
                  variant="ghost"
                  variantColor="blue"
                  color="blue.800"
                  w={200}
                  borderRadius={0}
                >
                  {locationToTranslations(location).buttons.login}
                </Button>
                <Flex direction="row" mt={16}>
                  <PseudoBox
                    mr={8}
                    textAlign="center"
                    color="grey.600"
                    fontFamily="heading"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    _hover={{ color: 'teal.800' }}
                    _active={{ color: 'teal.600' }}
                  >
                    <GatsbyLink to={'/en'} activeStyle={{ color: colors.teal[600] }}>
                      english 🇬🇧
                    </GatsbyLink>
                  </PseudoBox>
                  <PseudoBox
                    textAlign="center"
                    color="grey.600"
                    fontFamily="heading"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    _hover={{ color: 'teal.800' }}
                    _active={{ color: 'teal.600' }}
                  >
                    <GatsbyLink to={`/hu`} activeStyle={{ color: colors.teal[600] }}>
                      magyar 🇭🇺
                    </GatsbyLink>
                  </PseudoBox>
                </Flex>
              </Flex>
            </Flex>
          )}
        </Flex>
      )}
    </Location>
  );
};

const DesktopNavBar = () => {
  const { colors } = useTheme();

  return (
    <Location>
      {({ location }) => (
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
            <GatsbyLink to={`/${languagePath(location)}`}>
              <Image src="/logos/logo.svg" mx={[4, 4, 4, 8]} my={3} w="90px" />
            </GatsbyLink>
            {Object.keys(locationToTranslations(location).pages).map((key) => (
              <PseudoBox
                key={key}
                textAlign="center"
                mr={[0, 0, 0, 1, 4]}
                color="grey.600"
                fontFamily="heading"
                fontWeight="semibold"
                _hover={{ color: 'teal.800' }}
                _active={{ color: 'teal.600' }}
              >
                <GatsbyLink
                  to={`/${languagePath(location)}/${key}`}
                  activeStyle={{ color: colors.teal[600] }}
                >
                  {locationToTranslations(location).pages[key].toUpperCase()}
                </GatsbyLink>
              </PseudoBox>
            ))}
          </Flex>
          <Flex justify="center">
            <Button
              as="a"
              //@ts-ignore
              href="https://app.cogito.study"
              fontFamily="heading"
              variant="ghost"
              color="blue.800"
              borderRadius={0}
              mr={4}
            >
              {locationToTranslations(location).buttons.login}
            </Button>
            <Button
              as="a"
              //@ts-ignore
              href="https://app.cogito.study/register"
              fontFamily="heading"
              variant="solid"
              variantColor="teal"
              color="blue.800"
              borderRadius={0}
              mr={8}
            >
              {locationToTranslations(location).buttons.register}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                //@ts-ignore
                leftIcon={FiGlobe}
                rightIcon="chevron-down"
                variant="ghost"
                variantColor="grey"
                borderRadius={0}
                mr={4}
              />
              <MenuList borderRadius={0}>
                <MenuItem onClick={() => navigate('/en')}>english 🇬🇧</MenuItem>
                <MenuItem onClick={() => navigate('/hu')}>magyar 🇭🇺</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      )}
    </Location>
  );
};

export const NavBar: FunctionComponent<NavBarProps> = (props) => (
  <>
    <DesktopNavBar />
    <CompactNavBar {...props} />
  </>
);
