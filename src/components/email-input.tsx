import { Button, Flex, TextInput, EmailIcon } from '@cogito-study/alea';
import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { TryoutFeedback, TryoutFeedbackProps } from './tryout-feedback';

export const EmailInput: FunctionComponent<TryoutFeedbackProps> = (props) => {
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
            onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
          />
          <Button
            ml={[0, 4]}
            mt={[2, 0]}
            maxWidth="280px"
            onClick={() => {
              if (!value) {
                setErrorMessage('Email address is required!');
              } else if (!/\S+@\S+\.\S+/.test(value)) {
                setErrorMessage('Email address is invalid!');
              } else {
                setButtonClicked(true);
                setErrorMessage('');
              }
            }}
          >
            try out!
          </Button>
        </Flex>
      )}
      {buttonClicked && <TryoutFeedback {...props} />}
    </Flex>
  );
};
