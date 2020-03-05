import { Button, Flex, Text } from '@chakra-ui/core';
import Cookies from 'js-cookie';
import React, { FunctionComponent, useState } from 'react';

const CookieKey = 'CogitoCookie';

interface CookieBannerProps {
  descriptionText: string;
  buttonText: string;
}

export const CookieBanner: FunctionComponent<CookieBannerProps> = ({
  descriptionText,
  buttonText,
}) => {
  const cookie = Cookies.get(CookieKey);
  const [isVisible, setIsVisible] = useState(cookie ? false : true);
  const hideCookieBanner = () => {
    Cookies.set(CookieKey, 'true', { expires: 365 });
    setIsVisible(false);
  };

  return (
    <Flex
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={1}
      px={6}
      pb={[6, 3]}
      pt={3}
      display={isVisible ? 'flex' : 'none'}
      direction={['column', 'column', 'row']}
      align={['start', 'start', 'center']}
      justify="center"
      backgroundColor="white"
      borderWidth={1}
      borderColor="blue.100"
    >
      <Text color="grey.600" fontSize="sm" mr={[0, 0, 6]}>
        {descriptionText}
      </Text>
      <Button
        mt={[3, 0]}
        px={4}
        size="sm"
        minW="unset"
        variantColor="teal"
        leftIcon="check"
        color="blue.800"
        borderRadius={0}
        onClick={() => hideCookieBanner()}
      >
        {buttonText}
      </Button>
    </Flex>
  );
};
