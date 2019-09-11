import React, { FunctionComponent } from 'react';
import { H3, H2, Paragraph, Flex } from '@cogito-study/alea';
import Image from 'gatsby-image';
import styled from 'styled-components';

interface BlogPostSliceProps {
  slices: any[];
}

const ImageWithWidth = styled(Image)`
  width: 100%;
`;

export const BlogPostSlices: FunctionComponent<BlogPostSliceProps> = ({ slices }) => {
  return (
    <Flex mx={3} flexDirection="column" backgroundColor="grey.light.4" minHeight="80vh">
      {slices.map((slice: any, index: number) => {
        const { primary, slice_type } = slice;

        switch (slice_type) {
          case 'header_1':
            return (
              <H2 color="primary.dark" mt={5} mb={4} key={index}>
                {primary.text.text}
              </H2>
            );
          case 'header_2':
            return (
              <H3 color="primary.dark" mt={5} mb={4} key={index}>
                {primary.text.text}
              </H3>
            );
          case 'text':
            return (
              <Paragraph color="grey.dark.3" my={4} key={index}>
                {primary.text.text}
              </Paragraph>
            );
          case 'image':
            return (
              <Flex my={7} justifyContent="center" key={index}>
                <ImageWithWidth fluid={primary.image.localFile.childImageSharp.fluid} alt={primary.image.alt} />
              </Flex>
            );
          default:
            return null;
        }
      })}
    </Flex>
  );
};
