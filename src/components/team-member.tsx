import { Box, Heading, Text } from '@chakra-ui/core';
import Image from 'gatsby-image';
import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { ChildImageSharp } from '../types';

const ProfileImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  max-width: 300px;
  max-height: 300px;
`;

const ImageContainer = styled(Box)`
  display: block;
  max-width: 300px;
  max-height: 300px;

  overflow: hidden;
`;

interface TeamMemberProps {
  original_image: ChildImageSharp;
  hovered_image1: ChildImageSharp;
  name: string;
  position: string;
  alt?: string;
}

export const TeamMember: FunctionComponent<TeamMemberProps> = ({
  original_image,
  hovered_image1,
  name,
  position,
  alt,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box w={[140, 200, 200, 260, 300]}>
      <ImageContainer
        h={[140, 200, 200, 260, 300]}
        w={[140, 200, 200, 260, 300]}
        onTouchStart={() => setHovered((hovered) => !hovered)}
        onTouchEndCapture={() => setHovered((hovered) => !hovered)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ProfileImage
          fluid={
            hovered ? hovered_image1.childImageSharp.fluid : original_image.childImageSharp.fluid
          }
          alt={alt}
        />
      </ImageContainer>
      <Heading as="h3" fontSize={[15, 18, 18, 22]} mb={1} mt={2} color="blue.800">
        {name}
      </Heading>
      <Text fontSize={[13, 16]} lineHeight={1.2} mb={6} mt={0} color="grey.600">
        {position}
      </Text>
    </Box>
  );
};
