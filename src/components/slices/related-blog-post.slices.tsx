import React, { FunctionComponent } from 'react';
import { Anchor, Box, H4, Flex } from '@cogito-study/alea';

interface RelatedBlogPostSlicesProps {
  slices: Array<any>;
}

export const RelatedBlogPostSlices: FunctionComponent<RelatedBlogPostSlicesProps> = ({ slices }) => {
  console.log(slices);
  return (
    <Flex mt={6}>
      {slices.map(({ primary, slice_type }) => {
        switch (slice_type) {
          case 'related_posts':
            return (
              <Box width="360px">
                <Anchor my={7} href={`/blog/${primary.blog_post.slug}`}>
                  <img src={primary.blog_post.document[0].data.hero_image.url} alt={primary.blog_post.document[0].data.hero_image.alt} width="100%" />
                  <H4 color="grey.dark.2">{primary.blog_post.document[0].data.title.text}</H4>
                </Anchor>
              </Box>
            );
          default:
            return null;
        }
      })}
    </Flex>
  );
};
