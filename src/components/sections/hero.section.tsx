import { Box, Button, Flex, Heading, Image } from '@chakra-ui/core';
import React from 'react';
import i18n from '../../../config/i18n.js';
import phoneConversation from '../../../static/images/phoneConv.gif';
import heroBg from '../../../static/background/hero-bg.svg';
import styled from '@emotion/styled';
interface HeroSectionProps {
  lang: string;
  motto: string;
  description: string;
  popupTitle: string;
  popupText: string;
}

const MessageBox = styled(Box)`
  border-radius: 5px;
  margin: 5px;
`;

export const HeroSection = ({ lang }: HeroSectionProps) => {
  return (
    <Flex
      direction={['column', 'column', 'row']}
      alignItems="center"
      pt={[16, 24]}
      mb={[2, 10]}
      mx={[0, 0, 0, 6]}
      minH="76vh"
    >
      <Box display={['none', 'none', 'initial']}>
        <Image src={phoneConversation} maxH="60vh" />
      </Box>
      <Box w="90%" display={['initial', 'initial', 'none']} mt={4}>
        <MessageBox bg="grey.100" color="grey.900" fontWeight="bold" borderRadius={8} px={4} py={4}>
          Of course we do...
        </MessageBox>

        <MessageBox bg="blue.400" color="#fff" fontWeight="bold" borderRadius={8} px={4} py={4}>
          Of course we do...
        </MessageBox>
      </Box>

      <Flex direction="column" justify="center" maxW={830} minH={350}>
        <Image
          pos="absolute"
          display={['none', 'none', 'initial']}
          zIndex={-1}
          ml={-8}
          src={heroBg}
          maxH="40vh"
        />
        <Box ml={[2, 2, 16]} mr={[2]}>
          <Heading as="h1" fontSize={['xl', 'xl', '3xl', '5xl']} lineHeight="base" color="grey.900">
            In need of the best notes?
          </Heading>
          <Heading
            as="h2"
            mt={[0, 0, 1]}
            fontSize={['l', 'l', 'xl']}
            lineHeight="base"
            color="blue.600"
          >
            We have everything you need!
          </Heading>
          <Heading
            as="h3"
            fontSize={['sm', 'sm', 'md']}
            mt={[3, 3, 8]}
            maxW="60%"
            color="grey.800"
            fontWeight="semibold"
            lineHeight="base"
          >
            Create, update and read notes easily together as students.
          </Heading>
          <Button
            as="a"
            //@ts-ignore
            href="https://app.cogito.study/register"
            variant="solid"
            mt={[5, 5, 5, 8]}
            variantColor="teal"
            color="blue.800"
            borderRadius={0}
            px={16}
            maxW={200}
          >
            {i18n[lang].buttons.register}
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
