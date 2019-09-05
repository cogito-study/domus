import { Flex, H4, Paragraph, Box } from '@cogito-study/alea';
import React, { FunctionComponent } from 'react';
import Email from '../../static/logos/email.svg';

interface FeedbackProps {
  title: string;
  text: string;
}

export const TryoutFeedback: FunctionComponent<FeedbackProps> = ({ title, text }) => {
  return (
    <Flex
      width={['264px', '394px']}
      height={['164px', '98px']}
      border={2}
      flexDirection={['column', 'row']}
      alignItems={['start', 'center']}
      justifyContent="center"
      borderColor="accent.normal"
      bg="grey.light.4"
    >
      <Box ml={3} mr={4}>
        <img src={Email} />
      </Box>
      <Flex alignItems="start" flexDirection="column" mr={3} ml={[4, 0]} mb={[4, 0]}>
        <H4 color="grey.dark.3" mt={0} mb={2}>
          {title}
        </H4>
        <Paragraph lineHeight="1.3" color="grey.light.1">
          {text}
        </Paragraph>
      </Flex>
    </Flex>
  );
};
