import { Avatar, Flex, Heading, Image, Text } from '@chakra-ui/core';
import { Reveal, Animation } from 'react-genie';
import React, { FunctionComponent } from 'react';
import quote from '../../../static/images/icon-quote.svg';

interface CustomerSectionProps {
  title: string;
}

const userPics = [
  'https://randomuser.me/api/portraits/men/52.jpg',
  'https://randomuser.me/api/portraits/women/90.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
];

export const TestimonialSection: FunctionComponent<CustomerSectionProps & { data: any }> = ({
  title,
  data,
}) => {
  return (
    <Flex my={8} align="center" justify="center" direction="column" id="testimonial">
      <Heading
        maxW={['260px', '360px']}
        color="blue.800"
        fontSize="xl"
        lineHeight="normal"
        mb={[4, 10]}
      >
        {title}
      </Heading>
      <Flex direction={['column', 'column', 'row']} justify="center" align="start">
        {data.map((item: any, index: number) => {
          const { name, position, testimonial } = item.primary;
          return (
            <Reveal animation={Animation.FadeIn} key={index}>
              <Flex
                pos="relative"
                maxW={340}
                my={[6, 6, 'initial']}
                h={230}
                flexDirection="column"
                mx={[5, 6]}
                alignItems="center"
                borderWidth={2}
                borderColor="blue.100"
                bg="#fff"
                py={8}
                px={6}
              >
                <Image src={quote} pos="absolute" top={0} left={0} />
                <Avatar src={userPics[index]} showBorder borderColor="teal.600" />
                <Heading
                  as="h4"
                  fontSize="md"
                  lineHeight="normal"
                  color="blue.800"
                  textAlign="center"
                  fontWeight={600}
                  mt={2}
                >
                  {name.text}
                </Heading>
                <Heading as="h5" fontSize="sm" color="grey.700" textAlign="center" mt={1}>
                  {position.text}
                </Heading>
                <Text
                  color="blue.800"
                  fontSize="md"
                  fontWeight="bold"
                  textAlign="center"
                  lineHeight="base"
                  mt={6}
                >
                  {testimonial.text}
                </Text>
              </Flex>
            </Reveal>
          );
        })}
      </Flex>
    </Flex>
  );
};
