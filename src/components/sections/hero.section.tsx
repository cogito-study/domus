import React, { FunctionComponent, useState } from 'react';
import { Box, Button, H1, Flex, H4, TextInput, EmailIcon } from '@cogito-study/alea';
import { TryoutFeedback } from '../tryout-feedback';

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
  var [buttonClicked, setButton] = useState(false);
  return (
    <Flex flexDirection="column" alignItems="center" mt={[7, 10]} pt={7} mb={[2, 5]} mx={[0, 0, 0, 6]}>
      <Flex flexDirection={['column', 'column', 'column', 'row']} mb={[3, 7]}>
        <Box>
          <H1 color="primary.dark">{motto}</H1>
        </Box>
        <Flex flexDirection="column" mt={[0, 0, 0, 4]}>
          <Box>
            <H4 color="grey.dark.3">{description}</H4>
            {!buttonClicked && (
              <Flex flexDirection={['column', 'row']} height={['168px', '102px']}>
                <TextInput
                  width="262px"
                  placeholder="Enter your e-mail"
                  help='By clicking "try out!" your agree to our Privacy Policy.'
                  icon={<EmailIcon />}
                />
                <Button
                  ml={[0, 4]}
                  mt={[2, 0]}
                  maxWidth="280px"
                  onClick={() => {
                    setButton((buttonClicked) => !buttonClicked);
                  }}
                >
                  try out!
                </Button>
              </Flex>
            )}
            {buttonClicked && <TryoutFeedback title={popupTitle} text={popupText}></TryoutFeedback>}
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
