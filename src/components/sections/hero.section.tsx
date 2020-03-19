import { Box, Button, Flex, Heading, Image, BoxProps } from '@chakra-ui/core';
import React from 'react';
import i18n from '../../../config/i18n.js';
import heroBoxCorner from '../../../static/images/hero-box-corner.svg';
import styled from '@emotion/styled';
import { Reveal, Animation } from 'react-genie';

interface HeroSectionProps {
  lang: string;
  motto: string;
  description: string;
  popupTitle: string;
  popupText: string;
}

const MessageBox = styled(Box)`
  border-radius: 15px;
  font-weight: bold;
`;

const messages = [
  { text: `Hey man! Do we have some notes for tomorrow's exam?`, type: 'received', delay: 500 },
  { text: `😅 Of course we do...`, type: 'sent', delay: 1100 },
  { text: `https://cogito.study`, type: 'sent', delay: 1400 },
  { text: `Saved my life! Beers on me next time! 🙌`, type: 'received', delay: 2000 },
  {
    text: `Aaand also, does cogito have Corporate Finance notes too?`,
    type: 'received',
    delay: 2300,
  },
];
export const Message = ({
  type,
  text,
  delay,
  ...rest
}: {
  type: 'sent' | 'received';
  text: string;
  delay?: number;
} & BoxProps) => {
  return (
    <>
      {type === 'sent' ? (
        <Reveal animation={Animation.SlideInRight} delay={delay}>
          <Flex justify="flex-end">
            <MessageBox
              maxW={['65%', '55%', 220]}
              bg="blue.400"
              color="#fff"
              px={4}
              py={2}
              {...rest}
            >
              {text}
            </MessageBox>
          </Flex>
        </Reveal>
      ) : (
        <Reveal animation={Animation.SlideInLeft} delay={delay}>
          <Flex justify="flex-start">
            <MessageBox
              maxW={['70%', '60%', 220]}
              bg="grey.100"
              color="grey.900"
              px={4}
              py={2}
              {...rest}
            >
              {text}
            </MessageBox>
          </Flex>
        </Reveal>
      )}
    </>
  );
};

export const HeroSection = ({ lang }: HeroSectionProps) => {
  return (
    <Flex
      direction={['column-reverse', 'column-reverse', 'row']}
      alignItems="center"
      justifyContent="center"
      pt={[16, 24]}
      mb={[2, 2, 10]}
      mx={[0, 0, 6]}
    >
      <Box
        mt={[24, 24, 'initial']}
        borderWidth={[0, 0, 4]}
        borderColor="blue.800"
        borderRadius={[0, 0, 60]}
        zIndex={1}
        bg={['initial', 'initial', '#fff']}
        h={['initial', 'initial', 600]}
        px={[6, 6, 4]}
        m="0 auto"
        py={['initial', 'initial', 16]}
        minW={310}
        overflowX="hidden"
      >
        <Box display={['none', 'none', 'initial']}>
          {messages.map((message: any, i: number) => {
            const { text, type, delay } = message;
            return (
              <Message
                text={text}
                type={type}
                delay={delay}
                key={i}
                mt={i >= 1 && messages[i].type !== messages[i - 1].type ? 6 : 2}
              />
            );
          })}
        </Box>
        <Box display={['initial', 'initial', 'none']}>
          {messages.map((message: any, i: number) => {
            const { text, type } = message;
            return (
              <Message
                text={text}
                type={type}
                key={i}
                mt={i >= 1 && messages[i].type !== messages[i - 1].type ? 6 : 2}
              />
            );
          })}
        </Box>
      </Box>
      <Flex direction="column" justify="center" maxW={830}>
        <Flex
          pos="relative"
          direction="column"
          align={['center', 'center', 'start']}
          mt={[20, 20, 'initial']}
          ml={[2, 2, -20]}
          mr={[2]}
          textAlign={['center', 'center', 'initial']}
          borderColor="blue.100"
          borderWidth={[0, 0, 2]}
          boxSizing="content-box"
          bg={['initial', 'initial', '#fff']}
          p={[4, 4, 16]}
          pl={[4, 4, 32]}
        >
          <Image
            pos="absolute"
            top={-2}
            right={-2}
            display={['none', 'none', 'initial']}
            src={heroBoxCorner}
            zIndex={100}
          />
          <Heading as="h1" fontSize={['xl', 'xl', '3xl', '5xl']} lineHeight="base" color="grey.900">
            Looking for the best notes?
          </Heading>
          <Heading
            as="h2"
            mt={[4, 4, 1]}
            fontSize={['lg', 'lg', 'xl']}
            lineHeight="base"
            color="blue.800"
          >
            We have everything you need!
          </Heading>
          <Heading
            as="h3"
            fontSize="sm"
            mt={[12, 12, 8]}
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
            mt={[12, 12, 8]}
            variantColor="teal"
            color="blue.800"
            borderRadius={0}
            px={[24, 24, 16]}
            maxW={200}
          >
            {i18n[lang].buttons.register}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
