import { Button, Flex, TextInput, EmailIcon } from '@cogito-study/alea';
import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { TryoutFeedback } from './tryout-feedback';

interface InputProps {
  popupTitle: string;
  popupText: string;
  popupTitleColor: string;
  popupTextColor: string;
  popupBackgroundColor: string;
}

export const EmailInput: FunctionComponent<InputProps> = ({
  popupTitle,
  popupTitleColor,
  popupText,
  popupTextColor,
  popupBackgroundColor,
}) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [value, setValue] = useState('');

  return (
    <Flex>
      {!buttonClicked && (
        <Flex flexDirection={['column', 'row']} height={['168px', '102px']}>
          <TextInput
            width="262px"
            placeholder="Enter your e-mail"
            help='By clicking "try out!" your agree to our Privacy Policy.'
            error={errorMessage}
            icon={<EmailIcon />}
            value={value || ''}
            name="email"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const target = event.target;
              const value = target.value;
              setValue(() => value);
            }}
          />
          <Button
            ml={[0, 4]}
            mt={[2, 0]}
            maxWidth="280px"
            onClick={() => {
              if (!value) {
                setErrorMessage(() => 'Email address is required!');
              } else if (!/\S+@\S+\.\S+/.test(value)) {
                setErrorMessage(() => 'Email address is invalid!');
              } else {
                setButtonClicked(() => true);
                setErrorMessage(() => '');
              }
            }}
          >
            try out!
          </Button>
        </Flex>
      )}
      {buttonClicked && (
        <TryoutFeedback
          title={popupTitle}
          titleColor={popupTitleColor}
          text={popupText}
          textColor={popupTextColor}
          backgroundColor={popupBackgroundColor}
        ></TryoutFeedback>
      )}
    </Flex>
  );
};
