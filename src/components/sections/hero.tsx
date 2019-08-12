import React, { FunctionComponent } from 'react';
import { Box, H1, Flex, H4, H3 } from '@cogito-study/alea';

interface HeroProps {
  motto: string;
  description: string;
  subtitle: string;
}

export const Hero: FunctionComponent<HeroProps> = ({ motto, description, subtitle }) => (
  <Flex flexDirection="column" alignItems="center">
    <Flex flexDirection="row">
      <Box>
        <H1 color="primary.dark">{motto}</H1>
      </Box>
      <Flex flexDirection="column">
        <Box>
          <H4 color="grey.dark.3">{description}</H4>
        </Box>
      </Flex>
    </Flex>

    <Box>
      <H3 color="grey.dark.2">{subtitle}</H3>
    </Box>
  </Flex>
);
