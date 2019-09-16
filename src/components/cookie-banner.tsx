import { Button, Flex, FlexProps, Paragraph } from '@cogito-study/alea';
import Cookies from 'js-cookie';
import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

type AbsoluteContainerProps = FlexProps & { isVisible: boolean };

const AbsoluteContainer = styled(Flex)<AbsoluteContainerProps>`
  z-index: 1;
  position: fixed;
  bottom: 0;
  display: ${({ isVisible }: AbsoluteContainerProps) => (isVisible ? 'block' : 'none')};
`;
const CookieKey = 'CogitoCookie';

export const CookieBanner: FunctionComponent = () => {
  const cookie = Cookies.get(CookieKey);
  const [isVisible, setIsVisible] = useState(cookie ? false : true);
  const hideCookieBanner = () => {
    Cookies.set(CookieKey, 'true', { expires: 365 });
    setIsVisible(false);
  };

  return (
    <AbsoluteContainer isVisible={isVisible} width="100%" backgroundColor="white" justifyContent="center">
      <Flex
        mx={5}
        mb={[5, 3]}
        mt={3}
        flexDirection={['column', 'column', 'row']}
        alignItems={['start', 'start', 'center']}
      >
        <Paragraph color="grey.normal">
          We use cookies and other tracking technologies to improve your browsing experience on our site, show
          personalized content, analyze site traffic, and understand where our audience is coming from.
        </Paragraph>
        <Button mt={[3, 3, 0]} ml={[0, 0, 6]} width={['100%', '120px']} onClick={() => hideCookieBanner()}>
          accept
        </Button>
      </Flex>
    </AbsoluteContainer>
  );
};
