import { Flex, H4, Paragraph, Box } from '@cogito-study/alea';
import React from 'react';
import styled from 'styled-components';

const Overlay = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TryoutFeedback = () => {
  return (
    <Overlay border={2} px={3} py={5} borderColor="accent.normal" bg="grey.light.4">
      <Box ml={0} mr={4}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50.6667 48H13.3333C11.864 48 10.6667 46.8053 10.6667 45.3333V19.3333L30.4 34.1333C30.8747 34.4907 31.4373 34.6667 32 34.6667C32.5627 34.6667 33.1253 34.4907 33.6 34.1333L53.3333 19.3333V45.3333C53.3333 46.8053 52.136 48 50.6667 48ZM48.8906 16L32.0026 28.6667L15.1146 16H48.8906ZM50.6673 10.667H13.334C8.92332 10.667 5.33398 14.2563 5.33398 18.667V45.3337C5.33398 49.7443 8.92332 53.3337 13.334 53.3337H50.6673C55.078 53.3337 58.6673 49.7443 58.6673 45.3337V18.667C58.6673 14.2563 55.078 10.667 50.6673 10.667Z"
            fill="#00D2B3"
          />
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="10" width="54" height="44">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50.6667 48H13.3333C11.864 48 10.6667 46.8053 10.6667 45.3333V19.3333L30.4 34.1333C30.8747 34.4907 31.4373 34.6667 32 34.6667C32.5627 34.6667 33.1253 34.4907 33.6 34.1333L53.3333 19.3333V45.3333C53.3333 46.8053 52.136 48 50.6667 48ZM48.8906 16L32.0026 28.6667L15.1146 16H48.8906ZM50.6673 10.667H13.334C8.92332 10.667 5.33398 14.2563 5.33398 18.667V45.3337C5.33398 49.7443 8.92332 53.3337 13.334 53.3337H50.6673C55.078 53.3337 58.6673 49.7443 58.6673 45.3337V18.667C58.6673 14.2563 55.078 10.667 50.6673 10.667Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)">
            <rect width="64" height="64" fill="#00D2B3" />
          </g>
        </svg>
      </Box>
      <Flex alignItems="start" flexDirection="column">
        <H4 mt={0} mb={2}>
          Thank you for your interest!
        </H4>
        <Paragraph color="grey.light.1">We’ll contact you as soon as Cogito is ready to use</Paragraph>
      </Flex>
    </Overlay>
  );
};
