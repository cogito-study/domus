import React, { FunctionComponent } from 'react';
import { Box, Flex } from '@cogito-study/alea';

export const ContactSection: FunctionComponent = () => (
  <Flex flexDirection="column" alignItems="center" mt={[7, 10]} pt={7} mb={[2, 5]} mx={[0, 0, 0, 6]}>
    <Box border={3} borderColor="primary.light" width="600px" height="600px"></Box>
  </Flex>
);
