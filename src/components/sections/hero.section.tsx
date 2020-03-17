import { Box, Button, Flex, Heading, Image, BoxProps } from '@chakra-ui/core';
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
  border-radius: 15px;
  font-weight: bold;
`;

export const Message = ({
  type,
  message,
  delayMultiplier,
  ...rest
}: {
  delayMultiplier: number;
  type: 'sent' | 'received';
  message: string;
} & BoxProps) => {
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
        delay: delayMultiplier * 0.25, //TODO: update numbering when called this
      },
    }));

    toRight.start(() => ({
      opacity: 1,
      x: 'calc(100vw - 80%)',
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
            maxW={['65%', '55%']}
            bg="blue.400"
            color="#fff"
            px={4}
            py={2}
            mt={2}
            {...rest}
          >
            {message}
          </MessageBox>
        </motion.div>
      ) : (
        <motion.div positionTransition initial={fromLeft} animate={toLeft}>
          <MessageBox
            maxW={['70%', '60%']}
            bg="grey.100"
            color="grey.900"
            px={4}
            py={2}
            mt={2}
            {...rest}
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
      direction={['column-reverse', 'column-reverse', 'row']}
      alignItems="center"
      pt={[16, 24]}
      mb={[2, 10]}
      mx={[0, 0, 0, 6]}
      minH="76vh"
    >
      <Box display={['none', 'none', 'initial']}>
        <Image src={phoneConversation} maxH="60vh" />
      </Box>
      <Box w="90%" display={['initial', 'initial', 'none']} mt={[24, 24, 'initial']}>
        <Message
          type="received"
          message="Hey man! Do we have some notes for tomorrow's exam?"
          delayMultiplier={1}
        />
        <Message type="sent" message="😅 Of course we do..." delayMultiplier={5} mt={8} />
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
          delayMultiplier={11}
          mt={8}
        />
        <Message
          type="received"
          message="Aaand also, does cogito have Corporate Finance notes too?"
          delayMultiplier={13}
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
        <Flex
          direction="column"
          align={['center', 'center', 'start']}
          mt={[20, 20, 'initial']}
          ml={[2, 2, 16]}
          mr={[2]}
          textAlign={['center', 'center', 'initial']}
        >
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
