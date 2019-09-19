import { Box, H3, Paragraph } from '@cogito-study/alea';
import Image from 'gatsby-image';
import { ChildImageSharp } from '../types';
import React, { FunctionComponent, useState } from 'react';

import styled from 'styled-components';

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
    <Box width={[140, 200, 200, 260, 300]}>
      <ImageContainer
        height={[140, 200, 200, 260, 300]}
        width={[140, 200, 200, 260, 300]}
        onTouchStart={() => setHovered((hovered) => !hovered)}
        onTouchEndCapture={() => setHovered((hovered) => !hovered)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ProfileImage
          fluid={hovered ? hovered_image1.childImageSharp.fluid : original_image.childImageSharp.fluid}
          alt={alt}
        />
      </ImageContainer>
      <H3 fontSize={[15, 18, 18, 22]} mb={1} mt={2} color="primary.8">
        {name}
      </H3>
      <Paragraph fontSize={[13, 16]} lineHeight={1.2} mb={6} mt={0} color="neutral.6">
        {position}
      </Paragraph>
    </Box>
  );
};
