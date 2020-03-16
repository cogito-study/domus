import { Box, Button, Flex, Heading, Image } from '@chakra-ui/core';
import React, { useEffect } from 'react';
import i18n from '../../../config/i18n.js';
import phoneConversation from '../../../static/images/phoneConv.gif';
import heroBg from '../../../static/background/hero-bg.svg';
import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';

interface HeroSectionProps {
  lang: string;
  motto: string;
  description: string;
  popupTitle: string;
  popupText: string;
}

const MessageBox = styled(Box)`
  border-radius: 10px;
  font-weight: bold;
  margin-top: 8px;
`;

export const Message = ({
  type,
  message,
  delayMultiplier,
}: {
  delayMultiplier: number;
  type: 'sent' | 'received';
  message: string;
}) => {
  const fromLeft = { opacity: 0, x: 'calc(100vw - 130%)' };
  const fromRight = { opacity: 0, x: 'calc(100vw + 30%)' };

  const toRight = useAnimation();
  const toLeft = useAnimation();

  useEffect(() => {
    toLeft.start(() => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: delayMultiplier * 0.8,
      },
    }));

    toRight.start(() => ({
      opacity: 1,
      x: 'calc(100vw - 70%)',
      transition: {
        duration: 0.65,
        delay: delayMultiplier * 0.25,
      },
    }));
  });

  return (
    <>
      {type === 'sent' ? (
        <motion.div positionTransition initial={fromRight} animate={toRight}>
          <MessageBox
            w="55%"
            bg="blue.400"
            color="#fff"
            fontWeight="bold"
            borderRadius={8}
            px={4}
            py={2}
          >
            {message}
          </MessageBox>
        </motion.div>
      ) : (
        <motion.div positionTransition initial={fromLeft} animate={toLeft}>
          <MessageBox
            maxW="60%"
            bg="grey.100"
            color="grey.900"
            fontWeight="bold"
            borderRadius={8}
            px={4}
            py={2}
          >
            {message}
          </MessageBox>
        </motion.div>
      )}
    </>
  );
};

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
      <Box w="90%" display={['initial', 'initial', 'none']} mt={8}>
        <Message
          type="received"
          message="Hey man! Do we have some notes for tomorrow's exam?"
          delayMultiplier={1}
        />
        <Message type="sent" message="Of course we do..." delayMultiplier={6} />
        <Message type="sent" message="https://cogito.study" delayMultiplier={7} />
        {/* <Text
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          mt={4}
          mb={2}
          textAlign="center"
          color="grey.700"
        >
          NEXT DAY
        </Text> */}
        <Message
          type="received"
          message="Saved my life! Beers on me next time! 🙌"
          delayMultiplier={4}
        />
        <Message
          type="received"
          message="Aaand also, does cogito have Corporate Finance notes too?"
          delayMultiplier={5}
        />
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
        <Flex direction="column" align={['center', 'center', 'start']} ml={[2, 2, 16]} mr={[2]}>
          <Heading as="h1" fontSize={['xl', 'xl', '3xl', '5xl']} lineHeight="base" color="grey.900">
            In need of the best notes?
          </Heading>
          <Heading
            as="h2"
            mt={[4, 4, 1]}
            fontSize={['lg', 'lg', 'xl']}
            lineHeight="base"
            color="blue.600"
          >
            We have everything you need!
          </Heading>
          <Heading
            as="h3"
            fontSize="md"
            mt={[4, 4, 8]}
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
