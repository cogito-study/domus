import { Box, Button, Flex, Heading, Link } from '@chakra-ui/core';
import React from 'react';
import i18n from '../../../config/i18n.js';

interface HeroSectionProps {
  lang: string;
  motto: string;
  description: string;
  popupTitle: string;
  popupText: string;
}

export const HeroSection = ({ motto, description, lang }: HeroSectionProps) => {
  return (
    <Flex direction="column" alignItems="center" pt={[16, 24]} mb={[2, 10]} mx={[0, 0, 0, 6]}>
      <Flex mx={2} direction="column" justify="center" maxW={830} minH={350}>
        <Box mr={[0, 0, 6]}>
          <Heading as="h1" fontSize={['xl', 'xl', '3xl', '5xl']} lineHeight="base" color="blue.800">
            {motto}
          </Heading>
          <Heading
            as="h3"
            fontSize={['md', 'md', 'md', 'lg']}
            mt={4}
            color="grey.800"
            fontWeight="semibold"
            lineHeight="base"
          >
            {description}
          </Heading>
        </Box>
        <Link href="https://app.cogito.study/register" _hover={{ textDecor: 'none' }}>
          <Button
            variant="solid"
            mt={[5, 5, 5, 8]}
            px={16}
            variantColor="teal"
            color="blue.800"
            borderRadius={0}
          >
            {i18n[lang].buttons.register}
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};
