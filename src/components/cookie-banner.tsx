import { Button, Flex, FlexProps, Paragraph } from '@chakra-ui/core';
import Cookies from 'js-cookie';
import React, { FunctionComponent, useState } from 'react';
import styled from '@emotion/styled';

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

export const CookieBanner: FunctionComponent<CookieBannerProps> = ({ descriptionText, buttonText }) => {
  const cookie = Cookies.get(CookieKey);
  const [isVisible, setIsVisible] = useState(cookie ? false : true);
  const hideCookieBanner = () => {
    Cookies.set(CookieKey, 'true', { expires: 365 });
    setIsVisible(false);
  };

  return (
    <AbsoluteContainer isVisible={isVisible} backgroundColor="white" justifyContent="center" alignItems="center">
      <Flex
        mx={5}
        mb={[5, 3]}
        mt={3}
        flexDirection={['column', 'column', 'row']}
        alignItems={['start', 'start', 'center']}
        justifyContent="center"
      >
        <Paragraph color="neutral.4">{descriptionText}</Paragraph>
        <Button mt={[3, 3, 0]} ml={[0, 0, 6]} width={['100%', '120px']} onClick={() => hideCookieBanner()}>
          {buttonText}
        </Button>
      </Flex>
    </AbsoluteContainer>
  );
};
