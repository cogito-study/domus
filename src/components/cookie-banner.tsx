import { Button, Flex, FlexProps, Text } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Cookies from 'js-cookie';
import React, { FunctionComponent, useState } from 'react';

type AbsoluteContainerProps = FlexProps & { isVisible: boolean };

const AbsoluteContainer = styled(Flex)<AbsoluteContainerProps>`
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${({ isVisible }: AbsoluteContainerProps) => (isVisible ? 'flex' : 'none')};
`;

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
    <AbsoluteContainer
      isVisible={isVisible}
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        mx={6}
        mb={[6, 3]}
        mt={3}
        direction={['column', 'column', 'row']}
        align={['start', 'start', 'center']}
        justify="center"
      >
        <Text color="grey.400" fontSize="sm" mr={[0, 0, 6]}>
          {descriptionText}
        </Text>
        <Button
          variant="solid"
          variantColor="teal"
          color="blue.800"
          borderRadius={0}
          onClick={() => hideCookieBanner()}
        >
          {buttonText}
        </Button>
      </Flex>
    </AbsoluteContainer>
  );
};
