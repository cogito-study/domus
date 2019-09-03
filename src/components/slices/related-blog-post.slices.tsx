import { Box, Flex, H4 } from '@cogito-study/alea';
import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';

interface RelatedBlogPostSlicesProps {
  slices: any[];
}

export const RelatedBlogPostSlices: FunctionComponent<RelatedBlogPostSlicesProps> = ({ slices }) => (
  <Flex mt={9} flexDirection={['column', 'column', 'row', 'row']}>
    {slices.map(({ primary, slice_type }) => {
      switch (slice_type) {
        case 'related_posts':
          return (
            <Box maxWidth="360px">
              <Link to={`/blog/${primary.blog_post.slug}`}>
                <img
                  src={primary.blog_post.document[0].data.hero_image.url}
                  alt={primary.blog_post.document[0].data.hero_image.alt}
                  width="100%"
                />
              </Link>
              <H4 color="grey.dark.2" mt={4}>
                {primary.blog_post.document[0].data.title.text}
              </H4>
            </Box>
          );
        default:
          return null;
      }
    })}
  </Flex>
);
