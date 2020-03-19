import { Box, Button, Flex, Heading, Image, Text, Link, BoxProps } from '@chakra-ui/core';
import React from 'react';
import i18n from '../../../config/i18n.js';
import heroBoxCorner from '../../../static/images/hero-box-corner.svg';
import styled from '@emotion/styled';
import { Reveal, Animation } from 'react-genie';

interface HeroSectionProps {
  lang: string;
  motto: string;
  description: string;
  subtitle: string;
  popupTitle: string;
  popupText: string;
}

const MessageBox = styled(Box)`
  border-radius: 15px;
  font-weight: bold;
`;

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
  if (type === 'sent') {
    return (
      <Reveal animation={Animation.SlideInRight} delay={delay}>
        <Flex justify="flex-end">
          <MessageBox maxW={['65%', '55%', 220]} bg="blue.400" color="#fff" px={4} py={2} {...rest}>
            {text === 'https://cogito.study' ? (
              <Link
                href="https://app.cogito.study"
                textDecoration="underline"
                _hover={{ color: 'teal.200' }}
              >
                {text}
              </Link>
            ) : (
              <Text fontSize={['md', 'md', 'sm']}>{text}</Text>
            )}
          </MessageBox>
        </Flex>
      </Reveal>
    );
  } else if (type === 'received') {
    return (
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
            {text === 'https://cogito.study' ? (
              <Link
                href="https://app.cogito.study"
                textDecoration="underline"
                _hover={{ color: 'teal.200' }}
              >
                {text}
              </Link>
            ) : (
              <Text fontSize={['md', 'md', 'sm']}>{text}</Text>
            )}
          </MessageBox>
        </Flex>
      </Reveal>
    );
  } else if (type === 'date') {
    return (
      <Reveal animation={Animation.FadeIn} delay={delay}>
        <Text
          textTransform="uppercase"
          fontSize={['md', 'md', 'sm']}
          fontWeight="bold"
          mt={6}
          textAlign="center"
          color="grey.700"
        >
          {text}
        </Text>
      </Reveal>
    );
  } else return null;
};

export const HeroSection = ({ lang, motto, subtitle, description }: HeroSectionProps) => {
  const messages = i18n[lang].sections.hero.messages;
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
                mt={
                  i >= 1 &&
                  messages[i - 1].type === 'text' &&
                  messages[i].type !== messages[i - 1].type
                    ? 6
                    : 2
                }
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
                mt={
                  i >= 1 &&
                  messages[i - 1].type === 'text' &&
                  messages[i].type !== messages[i - 1].type
                    ? 6
                    : 2
                }
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
            {motto}
          </Heading>
          <Heading
            as="h2"
            mt={[4, 4, 1]}
            fontSize={['lg', 'lg', 'xl']}
            lineHeight="base"
            color="blue.800"
          >
            {subtitle}
          </Heading>
          <Heading
            as="h3"
            fontSize="sm"
            mt={[12, 12, 8]}
            color="grey.800"
            fontWeight="semibold"
            lineHeight="base"
          >
            {description}
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
