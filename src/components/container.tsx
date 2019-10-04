import { Flex, BoxProps } from '@chakra-ui/core';
import React, { FunctionComponent } from 'react';

export const Container: FunctionComponent<BoxProps> = ({ children, ...rest }) => {
  return (
    <Flex flexDirection="column" px={[4, 4, 0]} mx="auto" maxWidth={['100%', '640px', '640px', '1024px']} {...rest}>
      {children}
    </Flex>
  );
};
