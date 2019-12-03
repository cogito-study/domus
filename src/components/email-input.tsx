import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from '@chakra-ui/core';
import { Button } from '@cogito-study/alea';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import PrivacyPolicy from '../../static/documents/Adatvedelem.pdf';
import { TryoutFeedback, TryoutFeedbackProps } from './tryout-feedback';

export const EmailInput: FunctionComponent<TryoutFeedbackProps> = (props) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [value, setValue] = useState('');

  return (
    <Flex>
      <form onSubmit={(e) => e.preventDefault()}>
        {!buttonClicked && (
          <Flex flexDirection={['column', 'row']} height={['168px', '102px']} mt={2}>
            <FormControl w={262}>
              <InputGroup h={10}>
                <InputLeftElement>
                  <Icon as={FiMail} size="24px" color="grey.400" />
                </InputLeftElement>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your e-mail asd"
                  value={value || ''}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
                  bg="white"
                  color="grey.800"
                  fontFamily="body"
                  borderRadius={0}
                  borderColor="grey.500"
                  fontSize="sm"
                  _hover={{ borderColor: 'grey.200' }}
                  _placeholder={{ color: 'grey.300' }}
                />
              </InputGroup>
              <FormErrorMessage>{errorMessage}</FormErrorMessage>
              <FormHelperText id="email-helper-text" mt={2} color="grey.400" fontSize={12}>
                {`By clicking "try out!" your agree to our`}
                <Link fontSize={12} href={PrivacyPolicy} ml={1} color="teal.500">
                  Privacy Policy.
                </Link>
              </FormHelperText>
            </FormControl>
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
