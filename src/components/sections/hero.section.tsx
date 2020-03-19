import { Box, Button, Flex, Heading, Image, BoxProps } from '@chakra-ui/core';
import React from 'react';
import i18n from '../../../config/i18n.js';
import heroBoxCorner from '../../../static/images/hero-box-corner.svg';
import styled from '@emotion/styled';
import { Parallax } from 'rc-scroll-anim';

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
  appearanceDelay,
  ...rest
}: {
  type: 'sent' | 'received';
  message: string;
  appearanceDelay?: number[];
} & BoxProps) => {
  return (
    <>
      {type === 'sent' ? (
        <Parallax
          animation={{ playScale: appearanceDelay || [0.15, 0.25], x: 100, opacity: 1 }}
          style={{ transform: 'translateX(800px)', opacity: 0 }}
        >
          <MessageBox
            maxW={['65%', '55%', 200]}
            bg="blue.400"
            color="#fff"
            px={4}
            py={2}
            mt={2}
            {...rest}
          >
            {message}
          </MessageBox>
        </Parallax>
      ) : (
        <Parallax
          animation={{ playScale: appearanceDelay || [0.15, 0.25], x: 0, opacity: 1 }}
          style={{ transform: 'translateX(-300px)', opacity: 0 }}
        >
          <MessageBox
            maxW={['70%', '60%', 320]}
            bg="grey.100"
            color="grey.900"
            px={4}
            py={2}
            mt={2}
            {...rest}
          >
            {message}
          </MessageBox>
        </Parallax>
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
      mb={[2, 10]}
      mx={[0, 0, 0, 6]}
      minH="76vh"
    >
      <Box
        mt={[24, 24, 'initial']}
        borderWidth={[0, 0, 4]}
        borderColor="blue.800"
        borderRadius={[0, 0, 60]}
        zIndex={1}
        bg={['initial', 'initial', '#fff']}
        h="70vh"
        style={{ overflowX: 'hidden' }}
        px={4}
        pr={8}
        m="0 auto"
        py={16}
        justifyContent="center"
      >
        <Message
          type="received"
          message="Hey man! Do we have some notes for tomorrow's exam?"
          appearanceDelay={[0.03, 0.18]}
        />
        <Message type="sent" message="😅 Of course we do..." mt={8} />
        <Message type="sent" message="https://cogito.study" />
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
        <Message type="received" message="Saved my life! Beers on me next time! 🙌" mt={8} />
        <Message
          type="received"
          message="Aaand also, does cogito have Corporate Finance notes too?"
        />
      </Box>

      <Flex direction="column" justify="center" maxW={830} minH={350}>
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
