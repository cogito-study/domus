import React, { FunctionComponent } from 'react';
import { Box, H1, Flex, H4 } from '@cogito-study/alea';
import { EmailInput } from '../email-input';

interface HeroSectionProps {
  motto: string;
  description: string;
  subtitle: string;
  popupTitle: string;
  popupText: string;
}

export const HeroSection: FunctionComponent<HeroSectionProps> = ({
  motto,
  description,
  subtitle,
  popupTitle,
  popupText,
}) => {
  return (
    <Flex flexDirection="column" alignItems="center" mt={[7, 10]} pt={7} mb={[2, 5]} mx={[0, 0, 0, 6]}>
      <Flex flexDirection={['column', 'column', 'column', 'row']} mb={[3, 7]}>
        <Box ml={[0, 0, 3]} mr={[0, 0, 6]}>
          <H1 color="primary.dark">{motto}</H1>
        </Box>
        <Flex flexDirection="column" mt={[0, 0, 0, 4]} maxWidth="480px">
          <Box>
            <H4 color="grey.dark.3">{description}</H4>
            <EmailInput
              popupTitle={popupTitle}
              popupTitleColor="grey.dark.3"
              popupText={popupText}
              popupTextColor="grey.light.2"
              popupBackgroundColor="white"
            />
          </Box>
        </Flex>
      </Flex>
      <Box maxWidth="600px">
        <H4 mt={10} textAlign="center" color="grey.dark.2">
          {subtitle}
        </H4>
      </Box>
    </Flex>
  );
};
