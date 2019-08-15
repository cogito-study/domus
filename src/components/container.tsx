import { Box } from '@cogito-study/alea';
import React, { FunctionComponent } from 'react';

export const Container: FunctionComponent = ({ children }) => {
  return (
    <Box p={["0 5px", "0 20px", "0"]} m={["0 20px","0 auto"]} maxWidth={["100%", "640px", "640px", "1024px"]}>
      {children}
    </Box>
  );
};
