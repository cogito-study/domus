import { Box, Flex, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import React, { FunctionComponent } from 'react';
import i18n from '../../../config/i18n.js';

interface RelatedBlogPostSlicesProps {
  lang: string;
  slices: any[];
}

const FlexWithShadow = styled(Flex)`
  box-shadow: 0px 8.33333px 16.6667px rgba(80, 80, 80, 0.1),
    0px 1.66667px 2.5px rgba(80, 80, 80, 0.3);
`;

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
              <Link to={`/en/blog/${primary.blog_post.slug}`} key={index}>
                <Box mx={6} maxW="300px">
                  <FlexWithShadow
                    backgroundColor="teal.100"
                    w="300px"
                    h="200px"
                    justify="center"
                    align="center"
                  >
                    <Image
                      fixed={
                        primary.blog_post.document[0].data.hero_image.localFile.childImageSharp
                          .fixed
                      }
                      alt={primary.blog_post.document[0].data.hero_image.alt}
                    />
                  </FlexWithShadow>
                  <Heading
                    as="h4"
                    color="teal.600"
                    mt={4}
                    fontWeight="semibold"
                    lineHeight="normal"
                    fontSize={['sm', 'md']}
                    key={index}
                  >
                    {primary.blog_post.document[0].data.title.text}
                  </Heading>
                </Box>
              </Link>
            );
          } else if (primary.feature_description) {
            return (
              <Link
                to={`/${i18n[lang].path}/feature/${primary.feature_description.slug}`}
                key={index}
              >
                <Box mx={6} maxW="300px">
                  <FlexWithShadow
                    backgroundColor="teal.100"
                    w="300px"
                    h="200px"
                    justify="center"
                    align="center"
                  >
                    <Image
                      fixed={
                        primary.feature_description.document[0].data.hero_image.localFile
                          .childImageSharp.fixed
                      }
                      alt={primary.feature_description.document[0].data.hero_image.alt}
                    />
                  </FlexWithShadow>
                  <Heading
                    as="h4"
                    color="teal.600"
                    mt={4}
                    fontWeight="semibold"
                    lineHeight="normal"
                    fontSize={['sm', 'md']}
                    key={index}
                  >
                    {primary.feature_description.document[0].data.title.text}
                  </Heading>
                </Box>
              </Link>
            );
          }

        default:
          return null;
      }
    })}
  </Flex>
);
