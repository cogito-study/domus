import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  PseudoBox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useTheme,
} from '@chakra-ui/core';
import { Link as GatsbyLink } from 'gatsby';
import React, { FunctionComponent, useState } from 'react';
import { useLocation } from 'react-router';
import { FiGlobe } from 'react-icons/fi';
import i18n from '../../config/i18n.js';

const pagesEn: Record<string, string> = {
  PRODUCT: '/en',
  //BLOG: '/blog',
  //PRICING: '/pricing',
  'ABOUT US': 'en/about',
  CONTACT: 'en/contact',
};

const pagesHu: Record<string, string> = {
  'A TERMÉKRŐL': '/hu',
  //BLOG: '/blog',
  //PRICING: '/pricing',
  RÓLUNK: 'hu/about',
  KONTAKT: 'hu/contact',
};

const setPageHelper = (lang) => {
  switch (lang) {
    case 'en-us':
      return pagesEn;
    case 'hu':
      return pagesHu;
  }
};

interface NavBarProps {
  overlayMenuActive: boolean;
  onMenuButtonClicked: () => void;
}

// const pathname = location.pathname;
// let lang = pathname.slice(1);
// lang = lang.substring(0, lang.indexOf('/'));
// lang === 'en' ? (lang = 'en-us') : null;

const CompactNavBar = ({ overlayMenuActive, onMenuButtonClicked }: NavBarProps) => {
  const { colors } = useTheme();

  const [pages, setPages] = useState(pagesEn);
  const [lang, setLang] = useState('en-us');
  console.log(useLocation());
  const location = useLocation();

  const pathname = location.pathname;
  setLang(pathname.slice(1));
  setLang(lang.substring(0, lang.indexOf('/')));
  setLang(lang === 'en' ? 'en-us' : '');

  setPages(setPageHelper(lang));
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
                {i18n[lang].buttons.register}
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
                {i18n[lang].buttons.login}
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

  const [pages, setPages] = useState(pagesEn);
  const [lang, setLang] = useState('en-us');
  const location = useLocation();
  const pathname = location.pathname;
  setLang(pathname.slice(1));
  setLang(lang.substring(0, lang.indexOf('/')));
  setLang(lang === 'en' ? 'en-us' : '');

  setPages(setPageHelper(lang));

  console.log(lang);
  console.log(pages);

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
        {Object.keys(pages).map((pageName, index) => (
          <PseudoBox
            key={index}
            h={22}
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
          <Button fontFamily="heading" variant="ghost" color="blue.800" borderRadius={0} mr={4}>
            {/* {i18n[lang].buttons.login} */}
          </Button>
        </a>
        <a href="https://app.cogito.study/register">
          <Button
            fontFamily="heading"
            variant="solid"
            variantColor="teal"
            color="blue.800"
            borderRadius={0}
            mr={8}
          >
            {/* {i18n[lang].buttons.register} */}
          </Button>
        </a>
        <Menu>
          <MenuButton
            as={Button}
            // @ts-nocheck
            //@ts-ignore
            leftIcon={FiGlobe}
            rightIcon="chevron-down"
            variant="ghost"
            variantColor="grey"
            mr={4}
          />
          <MenuList>
            <MenuItem>English</MenuItem>
            <MenuItem>Hungarian</MenuItem>
          </MenuList>
        </Menu>
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
