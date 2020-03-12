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
      const isFeatureDescription = slice.primary.feature_description !== undefined;
      const related = isFeatureDescription
        ? slice.primary.feature_description
        : slice.primary.blog_post;

      if (related) {
        const link = isFeatureDescription
          ? `/${i18n[lang].path}/feature/${related.slug}`
          : `/en/blog/${related.slug}`;

        return (
          <BlogPostThumbnail
            mx={6}
            link={link}
            key={index}
            image={related.document[0].data.hero_image.localFile.childImageSharp.fixed}
            image_alt={related.document[0].data.hero_image.alt}
            title={related.document[0].data.title.text}
          />
        );
      }
    })}
  </Flex>
);
