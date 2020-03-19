import { Avatar, Flex, Heading, Text } from '@chakra-ui/core';
import { Reveal, Animation } from 'react-genie';
import React, { FunctionComponent } from 'react';

interface CustomerSectionProps {
  title: string;
}

export const TestimonialSection: FunctionComponent<CustomerSectionProps & { data: any }> = ({
  title,
  data,
}) => {
  return (
    <Flex my={12} align="center" justify="center" direction="column" id="testimonial">
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
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  showBorder
                  borderColor="teal.600"
                />
                <Heading
                  as="h4"
                  fontSize="md"
                  lineHeight="normal"
                  color="blue.800"
                  textAlign="center"
                  fontWeight={600}
                  mt={1}
                >
                  {name.text}
                </Heading>
                <Heading as="h5" fontSize="sm" color="grey.700" textAlign="center">
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
