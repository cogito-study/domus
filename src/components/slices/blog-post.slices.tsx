import { Flex, H2, H3, theme } from '@cogito-study/alea';
import Image from 'gatsby-image';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Paragraph = styled.div`
  a {
    color: ${theme.colors.accent[6]};
    text-decoration: underline;
  }
  p {
    font-family: 'Nunito', Helvetica, serif;
    color: ${theme.colors.neutral[8]};
    line-height: 1.9;
    margin: 16px 0;
    font-size: 16px;
    font-weight: 600;
  }
`;

interface BlogPostSliceProps {
  slices: any[];
}

const ImageWithWidth = styled(Image)`
  width: 100%;
`;

export const BlogPostSlices: FunctionComponent<BlogPostSliceProps> = ({ slices }) => {
  return (
    <Flex mx={3} flexDirection="column" backgroundColor="transparent" minHeight="80vh">
      {slices.map((slice: any, index: number) => {
        const { primary, slice_type } = slice;

        switch (slice_type) {
          case 'header_1':
            return (
              <H2 color="primary.8" mt={5} mb={4} key={index}>
                {primary.text.text}
              </H2>
            );
          case 'header_2':
            return (
              <H3 color="primary.8" mt={5} mb={4} key={index}>
                {primary.text.text}
              </H3>
            );
          case 'text':
            return <Paragraph dangerouslySetInnerHTML={{ __html: primary.text.html }} />;
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
