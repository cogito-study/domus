import React, { FunctionComponent } from 'react';
import { Box, Button, H1, Flex, H4, TextInput, EmailIcon } from '@cogito-study/alea';

interface HeroSectionProps {
  motto: string;
  description: string;
  subtitle: string;
}

export const HeroSection: FunctionComponent<HeroSectionProps> = ({ motto, description, subtitle }) => (
  <Flex flexDirection="column" alignItems="center" mt={[7, 10]} pt={7} mb={[2, 5]} mx={[0, 0, 0, 6]}>
    <Flex flexDirection={['column', 'column', 'column', 'row']} mb={[3, 7]}>
      <Box>
        <H1 color="primary.dark">{motto}</H1>
      </Box>
      <Flex flexDirection="column" mt={[0, 0, 0, 4]}>
        <Box>
          <H4 color="grey.dark.3">{description}</H4>
          <Flex flexDirection={['column', 'row']}>
            <TextInput
              placeholder="Enter your e-mail"
              help='By clicking "try out!" your agree to our Privacy Policy.'
              icon={<EmailIcon />}
            ></TextInput>
            <Button ml={[0, 4]} mt={[2, 0]} maxWidth="280px">
              try out!
            </Button>
          </Flex>
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
