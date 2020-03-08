import { Box, BoxProps, Flex, Heading } from '@chakra-ui/core';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import React, { FunctionComponent } from 'react';

const FlexWithShadow = styled(Flex)`
  box-shadow: 0px 8.33333px 16.6667px rgba(80, 80, 80, 0.1),
    0px 1.66667px 2.5px rgba(80, 80, 80, 0.3);
`;

export const BlogPostThumbnail: FunctionComponent<{
  link: string;
  image: any;
  image_alt: string;
  title: string;
} & BoxProps> = ({ link, image, image_alt, title, ...rest }) => {
  return (
    <Link to={link}>
      <Box {...rest} maxW="300px">
        <FlexWithShadow
          backgroundColor="teal.100"
          w="300px"
          h="200px"
          justify="center"
          align="center"
        >
          <Image fixed={image} alt={image_alt} />
        </FlexWithShadow>
        <Heading
          as="h4"
          color="teal.600"
          mt={4}
          fontWeight="semibold"
          lineHeight="normal"
          fontSize={['sm', 'md']}
        >
          {title}
        </Heading>
      </Box>
    </Link>
  );
};
