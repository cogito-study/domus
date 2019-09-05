import { Box, BoxProps } from '@cogito-study/alea';
import React, { FunctionComponent } from 'react';

export const Container: FunctionComponent<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box px={[4, 4, 0]} mx="auto" maxWidth={['100%', '640px', '640px', '1024px']} {...rest}>
      {children}
    </Box>
  );
};
