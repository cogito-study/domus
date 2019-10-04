import React, { FunctionComponent } from 'react';
import { Box, H1, Flex, H4 } from '@chakra-ui/core';
import { EmailInput } from '../email-input';

interface HeroSectionProps {
  motto: string;
  description: string;
  popupTitle: string;
  popupText: string;
}

export const HeroSection: FunctionComponent<HeroSectionProps> = ({ motto, description, popupTitle, popupText }) => {
  return (
    <Flex flexDirection="column" alignItems="center" mt={[7, 10]} pt={7} mb={[2, 10]} mx={[0, 0, 0, 6]}>
      <Flex flexDirection={['column', 'column', 'column', 'row']} mb={[3, 7]}>
        <Box ml={[0, 0, 3]} mr={[0, 0, 6]}>
          <H1 color="primary.8">{motto}</H1>
        </Box>
        <Flex flexDirection="column" mt={[0, 0, 0, 4]} maxWidth="480px">
          <Box>
            <H4 color="neutral.8">{description}</H4>
            <EmailInput
              popup={{
                title: popupTitle,
                titleColor: 'neutral.8',
                text: popupText,
                textColor: 'neutral.4',
                backgroundColor: 'white',
              }}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
