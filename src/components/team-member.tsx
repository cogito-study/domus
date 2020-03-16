import { Box, Heading, Text } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import React, { FunctionComponent } from 'react';
import { ChildImageSharp } from '../types';

const ProfileImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  max-width: 300px;
  max-height: 300px;
  filter: grayscale(100%);
  transition: 0.2s ease-in-out;

  :hover {
    filter: none;
  }
`;

interface TeamMemberProps {
  original_image: ChildImageSharp;
  name: string;
  position: string;
  alt?: string;
}

export const TeamMember: FunctionComponent<TeamMemberProps> = ({
  original_image,
  name,
  position,
  alt,
}) => (
  <Box w={[140, 200, 200, 260, 300]}>
    <Box
      h={[140, 200, 200, 260, 300]}
      w={[140, 200, 200, 260, 300]}
      maxW={300}
      maxH={300}
      overflow="hidden"
      display="block"
    >
      <ProfileImage fluid={original_image.childImageSharp.fluid} alt={alt} />
    </Box>
    <Heading as="h3" fontSize={[15, 18, 18, 22]} mb={1} mt={2} color="blue.800">
      {name}
    </Heading>
    <Text fontSize={[13, 16]} lineHeight={1.2} mb={6} mt={0} color="grey.600">
      {position}
    </Text>
  </Box>
);
