import { Flex, H4, Paragraph, Box } from '@cogito-study/alea';
import React, { FunctionComponent } from 'react';
import Email from '../../static/logos/email.svg';

export interface TryoutFeedbackProps {
  popup: {
    title: string;
    titleColor: string;
    text: string;
    textColor: string;
    backgroundColor: string;
  };
}

export const TryoutFeedback: FunctionComponent<TryoutFeedbackProps> = ({
  popup: { title, titleColor, text, textColor, backgroundColor },
}) => {
  return (
    <Flex
      width={['264px', '394px']}
      height={['164px', '98px']}
      border={2}
      flexDirection={['column', 'row']}
      alignItems={['start', 'center']}
      justifyContent="center"
      borderColor="accent.normal"
      bg={backgroundColor}
    >
      <Box ml={3} mr={4}>
        <img src={Email} />
      </Box>
      <Flex alignItems="start" flexDirection="column" mr={3} ml={[4, 0]} mb={[4, 0]}>
        <H4 color={titleColor} mt={0} mb={2}>
          {title}
        </H4>
        <Paragraph lineHeight="1.3" color={textColor}>
          {text}
        </Paragraph>
      </Flex>
    </Flex>
  );
};
