import { Box } from '@cogito-study/alea';
import React, { FunctionComponent } from 'react';

export const Container: FunctionComponent = ({ children }) => {
  return (
    <Box px={[1, 4, 0]} mx="auto" maxWidth={["100%", "640px", "640px", "1024px"]}>
      {children}
    </Box>
  );
};
