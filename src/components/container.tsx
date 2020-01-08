import { Flex, FlexProps } from '@chakra-ui/core';
import React, { FC } from 'react';

export const Container: FC<FlexProps> = ({ children, ...rest }) => {
  return (
    <Flex flexDirection="column" px={[4, 4, 0]} mx="auto" maxWidth={['100%', '640px', '640px', '1024px']} {...rest}>
      {children}
    </Flex>
  );
};
