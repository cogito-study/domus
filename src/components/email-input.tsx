import { Button, Flex, TextInput, EmailIcon } from '@cogito-study/alea';
import React, { FunctionComponent, useState } from 'react';
import { TryoutFeedback } from './tryout-feedback';

interface InputProps {
  popupTitle: string;
  popupText: string;
}

export const EmailInput: FunctionComponent<InputProps> = ({ popupTitle, popupText }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <Flex>
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
              setButtonClicked((buttonClicked) => !buttonClicked);
            }}
          >
            try out!
          </Button>
        </Flex>
      )}
      {buttonClicked && <TryoutFeedback title={popupTitle} text={popupText}></TryoutFeedback>}
    </Flex>
  );
};
