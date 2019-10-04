import { Button, Flex, TextInput, EmailIcon, Box, Paragraph, Anchor } from '@chakra-ui/core';
import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { TryoutFeedback, TryoutFeedbackProps } from './tryout-feedback';
import PrivacyPolicy from '../../static/documents/Adatvedelem.pdf';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export const EmailInput: FunctionComponent<TryoutFeedbackProps> = (props) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [value, setValue] = useState('');

  return (
    <Flex>
      <form onSubmit={(e) => e.preventDefault()}>
        {!buttonClicked && (
          <Flex flexDirection={['column', 'row']} height={['168px', '102px']}>
            <TextInput
              width="262px"
              placeholder="Enter your e-mail"
              help={
                <Box>
                  <Paragraph paragraphSize="small" marginTop="8px" color="neutral.4">
                    {'By clicking "try out!" your agree to our '}
                    <Anchor fontSize="10px" marginTop="8px" href={PrivacyPolicy}>
                      Privacy Policy
                    </Anchor>
                    .
                  </Paragraph>
                </Box>
              }
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
                  addToMailchimp(value);
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
      </form>
    </Flex>
  );
};
