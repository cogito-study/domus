import { Flex } from '@chakra-ui/core';
import React, { FunctionComponent } from 'react';
import i18n from '../../../config/i18n.js';
import { BlogPostThumbnail } from './blog-post-thumbnail';

interface RelatedBlogPostSlicesProps {
  lang: string;
  slices: any[];
}

export const RelatedBlogPostSlices: FunctionComponent<RelatedBlogPostSlicesProps> = ({
  slices,
  lang,
}) => (
  <Flex mt={8} mb={7} flexDirection={['column', 'column', 'row', 'row']}>
    {slices.map((slice: any, index: number) => {
      const { primary, slice_type } = slice;
      switch (slice_type) {
        case 'related_posts':
          if (primary.blog_post) {
            return (
              <BlogPostThumbnail
                mx={6}
                link={`/en/blog/${primary.blog_post.slug}`}
                key={index}
                image={
                  primary.blog_post.document[0].data.hero_image.localFile.childImageSharp.fixed
                }
                image_alt={primary.blog_post.document[0].data.hero_image.alt}
                title={primary.blog_post.document[0].data.title.text}
              />
            );
          } else if (primary.feature_description) {
            return (
              <BlogPostThumbnail
                mx={6}
                link={`/${i18n[lang].path}/feature/${primary.feature_description.slug}`}
                key={index}
                image={
                  primary.feature_description.document[0].data.hero_image.localFile.childImageSharp
                    .fixed
                }
                image_alt={primary.feature_description.document[0].data.hero_image.alt}
                title={primary.feature_description.document[0].data.title.text}
              />
            );
          }
        default:
          return null;
      }
    })}
  </Flex>
);
