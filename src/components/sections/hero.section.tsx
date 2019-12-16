import { Button, Link } from '@chakra-ui/core';
import { Box, Flex, H1, H4 } from '@cogito-study/alea';
import React, { FunctionComponent } from 'react';

interface HeroSectionProps {
  motto: string;
  description: string;
  popupTitle: string;
  popupText: string;
}

export const HeroSection: FunctionComponent<HeroSectionProps> = ({ motto, description }) => {
  return (
    <Flex flexDirection="column" alignItems="center" mt={7} pt={[7, 10]} mb={[2, 10]} mx={[0, 0, 0, 6]}>
      <Flex flexDirection="column" justifyContent="center" maxWidth="830px" minHeight="350px">
        <Box mr={[0, 0, 6]}>
          <H1 color="primary.8">{motto}</H1>
          <H4 mt={3} color="neutral.8">
            {description}
          </H4>
        </Box>
        <Link href="https://app.cogito.study/register" _hover={{ textDecor: 'none' }}>
          <Button variant="solid" mt={[4, 4, 4, 8]} variantColor="teal" color="blue.800" borderRadius={0} w="200px">
            try out
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};
