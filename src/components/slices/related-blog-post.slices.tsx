import { Box, Flex, H4 } from '@cogito-study/alea';
import Image from 'gatsby-image';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { StyledGatsbyLink } from '../styled/styled-gatsby-link';

interface RelatedBlogPostSlicesProps {
  slices: any[];
}

const FlexWithShadow = styled(Flex)`
  box-shadow: 0px 8.33333px 16.6667px rgba(80, 80, 80, 0.1), 0px 1.66667px 2.5px rgba(80, 80, 80, 0.3);
`;

export const RelatedBlogPostSlices: FunctionComponent<RelatedBlogPostSlicesProps> = ({ slices }) => (
  <Flex mt={8} mb={7} flexDirection={['column', 'column', 'row', 'row']}>
    {slices.map((slice: any, index: number) => {
      const { primary, slice_type } = slice;

      console.log(primary);

      switch (slice_type) {
        case 'related_posts':
          return (
            <StyledGatsbyLink to={`/blog/${primary.blog_post.slug}`} key={index}>
              <Box mx={24} maxWidth="300px">
                <FlexWithShadow
                  backgroundColor="#D6E0F5"
                  width="300px"
                  height="200px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    fixed={primary.blog_post.document[0].data.hero_image.localFile.childImageSharp.fixed}
                    alt={primary.blog_post.document[0].data.hero_image.alt}
                  />
                </FlexWithShadow>
                <H4 color="grey.dark.2" mt={4} key={index}>
                  {primary.blog_post.document[0].data.title.text}
                </H4>
              </Box>
            </StyledGatsbyLink>
          );
        default:
          return null;
      }
    })}
  </Flex>
);
